import React, { useContext } from "react"
import { Button } from "../components/Button"
import { FxContext } from "../context/FxContext"

export const FxTable: React.FC = () => {
  const {} = useContext(FxContext)

  return (
    <div>
      <h2 className="text-2xl font-bold py-6">Current Exchange Rates</h2>
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-200 bg-sky-50 text-left px-2 py-1">Country</th>
            <th className="border border-gray-200 bg-sky-50 text-left px-2 py-1">Currency</th>
            <th className="border border-gray-200 bg-sky-50 text-left px-2 py-1">Exchange Rate</th>
            <th className="border border-gray-200 bg-sky-50 text-left px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 text-left px-2 py-1">country</td>
            <td className="border border-gray-200 text-left px-2 py-1">1 USD</td>
            <td className="border border-gray-200 text-right font-mono px-2 py-1">1.551</td>
            <td className="border border-gray-200 text-left px-2 py-1">
              <Button onClick={() => {}} label="Convert From" />
              <Button onClick={() => {}} label="Convert To" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}