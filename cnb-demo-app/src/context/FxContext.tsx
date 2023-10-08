import { createContext, useEffect, useMemo, useState } from 'react'
import React from 'react'
import { CnbFxRateSheet } from '../model/types'
import { fetchCnbFxRateSheet } from '../service/FxService'

interface Props {
  children?: React.ReactNode
}

export const FxContextProvider: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [currentSheet, setCurrentSheet] = useState<CnbFxRateSheet | undefined>()
  const [sourceAmount, setSourceAmount] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const [sourceCurrency, setSourceCurrency] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const fxRate = useMemo(() => {
    if (sourceCurrency === targetCurrency) {
      return 1
    }
    if (!currentSheet) {
      return undefined
    }
    const updatedRows = [...currentSheet.rows]
    updatedRows.push({
      amount: 1,
      code: 'CZK',
      country: 'Czechia',
      currency: 'crown',
      rate: 1,
    })
    const sourceRow = updatedRows.filter((r) => r.code === sourceCurrency)
    const targetRow = updatedRows.filter((r) => r.code === targetCurrency)
    if (sourceRow.length !== 1 || targetRow.length !== 1) {
      return undefined
    }
    console.log(sourceRow[0], targetRow[0])
    const sourceToCzk = sourceRow[0].rate / sourceRow[0].amount
    const targetToCzk = targetRow[0].rate / targetRow[0].amount
    return sourceToCzk * targetToCzk
  }, [currentSheet, sourceCurrency, targetCurrency])

  useEffect(() => {
    // fetch the CNB rates and store them internally

    setError(undefined)
    setLoading(true)

    fetchCnbFxRateSheet()
      .then((value) => {
        setCurrentSheet(value)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    // update target amount

    if (!fxRate || !sourceAmount) {
      setTargetAmount('')
      return
    }

    try {
      const sourceAmountNum = parseFloat(sourceAmount)
      const targetAmountNum = sourceAmountNum * fxRate
      setTargetAmount(targetAmountNum.toFixed(4))
    } catch (e) {
      // just ignore
    }
  }, [sourceAmount, sourceCurrency, targetCurrency, currentSheet, fxRate])

  useEffect(() => {
    // initialize currencies

    if (currentSheet && !sourceCurrency) {
      setSourceCurrency('CZK')
    }
    if (currentSheet && !targetCurrency) {
      setTargetCurrency('CZK')
    }
  }, [currentSheet, sourceCurrency, targetCurrency])

  const currencyCodes = useMemo(() => {
    // derive currency codes

    const codes = currentSheet?.rows.map((row) => row.code) ?? []
    codes.push('CZK')
    codes.sort()
    return codes
  }, [currentSheet])

  const value = {
    currentSheet,
    loading,
    error,
    sourceCurrency,
    setSourceAmount,
    setSourceCurrency,
    targetCurrency,
    setTargetCurrency,
    sourceAmount,
    targetAmount,
    currencyCodes,
  }

  return <FxContext.Provider value={value}>{props.children}</FxContext.Provider>
}

interface FxContextType {
  currentSheet?: CnbFxRateSheet
  loading: boolean
  error?: any
  setSourceAmount: (value: string) => void
  setSourceCurrency: (value: string) => void
  setTargetCurrency: (value: string) => void
  sourceCurrency: string
  targetCurrency: string
  sourceAmount?: string
  targetAmount?: string
  currencyCodes: string[]
}

export const FxContext = createContext<FxContextType>({
  loading: false,
  setSourceAmount: () => {},
  sourceCurrency: '',
  targetCurrency: '',
  setSourceCurrency: () => {},
  setTargetCurrency: () => {},
  currencyCodes: [],
})
