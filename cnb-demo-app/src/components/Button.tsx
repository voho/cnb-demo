import React from "react"

interface Props {
  onClick: () => void
  label: string
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onClick} className=" text-sm px-2 py-px m-1 rounded-md shadow-sm border border-gray-200 bg-gray-50 hover:bg-yellow-400">
      {props.label}
    </button>
  )
}