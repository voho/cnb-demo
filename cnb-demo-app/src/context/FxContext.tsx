import { createContext, useEffect, useState } from "react";
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

  const value = {
      currentSheet,
      loading,
      error
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
}

export const FxContext = createContext<FxContextType>({
  loading: false
});