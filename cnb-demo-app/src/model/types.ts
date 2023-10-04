export interface CnbFxRateRow {
  country: string
  currency: string
  amount: number
  code: string
  rate: number
}

export interface CnbFxRateSheet {
  date: string
  rows: CnbFxRateRow[]
}