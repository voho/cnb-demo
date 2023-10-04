import React from "react"
import { FxConvertor } from "./FxConvertor"
import { FxTable } from "./FxTable"

export const LandingPage: React.FC = (props) => {
  return (
    <div>
      <div className="bg-sky-300 py-3 px-5">
        <FxConvertor />
      </div>
      <div className="bg-white py-3 px-5">
        <FxTable />
      </div>
    </div>
  )
}