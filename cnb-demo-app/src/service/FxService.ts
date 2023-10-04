import { CnbFxRateSheet } from "../model/types"

export const fetchCnbFxRateSheet= (): Promise<CnbFxRateSheet>  => {
  return new Promise<CnbFxRateSheet>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        date: '2020-01-01',
        rows: [
          {amount:1, country:"Australia", currency: "dollar", code: "AUD", rate:14.768}
        ]
      }); 
    }, 250);   
  })
}