import { CnbFxRateSheet } from '../model/types'
import superagent from 'superagent'

const CNB_API_URL =
  'http://voho-cnb-demo-api-env.eu-north-1.elasticbeanstalk.com/'

export const fetchCnbFxRateSheet = (): Promise<CnbFxRateSheet> => {
  return superagent
      .get(CNB_API_URL)
      .retry(2)
      .then((res) => {
        return res.body as CnbFxRateSheet
      })
  }
