import React from "react"

interface Props {
  onClick: () => void
  label: string
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  )
}