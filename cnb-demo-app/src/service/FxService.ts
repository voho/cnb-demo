import { CnbFxRateRow, CnbFxRateSheet } from '../model/types'
import superagent from 'superagent'

const CNB_API_URL =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'

const CNB_API_PROXIED_URL =
  'https://corsproxy.io/?' + encodeURIComponent(CNB_API_URL)

const parseCsvResponse = (responseText: string): CnbFxRateSheet => {
  const records = responseText.split('\n')
  const date = records[0]
  records.splice(0, 2)
  const rows: CnbFxRateRow[] = []
  records.forEach((record: string) => {
    const cols = record.split('|', 5)
    if (cols.length !== 5) {
      return
    }
    rows.push({
      amount: parseInt(cols[2]),
      code: cols[3],
      country: cols[0],
      currency: cols[1],
      rate: parseFloat(cols[4]),
    })
  })
  return {
    date,
    rows,
  }
}

export const fetchCnbFxRateSheet = (): Promise<CnbFxRateSheet> => {
  return new Promise((resolve, reject) => {
    superagent
      .get(CNB_API_PROXIED_URL)
      .retry(1)
      .then((res) => {
        resolve(parseCsvResponse(res.text))
      })
      .catch((err) => {
        console.error(err)
        reject()
      })
  })
}
