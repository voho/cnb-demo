import React from 'react'

interface Props {
  children?: React.ReactNode
  loading: boolean
  error?: any
}

export const Loader: React.FC<Props> = (props) => {
  if (props.loading) {
    return <p>Loading...</p>
  }
  if (props.error) {
    return <p>Error: {props.error}</p>
  }
  return <>{props.children}</>
}
