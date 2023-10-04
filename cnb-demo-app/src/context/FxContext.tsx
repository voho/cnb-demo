import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import React from "react";
import { CnbFxRateSheet } from "../model/types";
import { fetchCnbFxRateSheet } from "../service/FxService";

interface Props {
  children?: React.ReactNode
};

export const FxContextProvider: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)
  const [currentSheet, setCurrentSheet] = useState<CnbFxRateSheet | undefined>()
  const [sourceAmount, setSourceAmount] = useState("")
  const [targetAmount, setTargetAmount] = useState("")
  const [sourceCurrency, setSourceCurrency] = useState("")
  const [targetCurrency, setTargetCurrency] = useState("")

  useEffect(() => {
    // fetch the CNB rates and store them internally
    
    setError(undefined)
    setLoading(true)    

    fetchCnbFxRateSheet()
      .then(value => {
        setCurrentSheet(value)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    try {
      const sourceAmountNum = parseFloat(sourceAmount)
      const targetAmountNum = sourceAmountNum * 1.42
      setTargetAmount(targetAmountNum.toFixed(4))
    } catch (e) {
      // just ignore
    }
  }, [sourceAmount, sourceCurrency, targetCurrency, currentSheet])

  const currencyCodes = useMemo(() => {
    return currentSheet?.rows.map(row => row.code) ?? []
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
      targetAmount,
      currencyCodes
  }

  return (
    <FxContext.Provider value={value}>
      {props.children}
    </FxContext.Provider>
  )
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
  currencyCodes: []
});