import React from "react"

interface Props {
  onClick: () => void
  label: string
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onClick} className="bg-orange-300 text-black font-semibold px-2 py-1 border border-orange-50 rounded-md text-sm shadow-sm m-3 hover:bg-yellow-400 hover:text-orange-800">
      {props.label}
    </button>
  )
}