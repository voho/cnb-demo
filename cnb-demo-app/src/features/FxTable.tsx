import React, { useContext } from 'react'
import { FxContext } from '../context/FxContext'
import { Loader } from '../components/Loader'

export const FxTable: React.FC = () => {
  const { currentSheet, loading, error } = useContext(FxContext)
  const rows = currentSheet?.rows ?? []

  return (
    <Loader loading={loading} error={error}>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold py-6">Current Exchange Rates</h2>
        <h3 className="text-md py-3">Date: {currentSheet?.date ?? 'N/A'}</h3>
      </div>
      <table className="border-collapse w-full rounded-sm shadow-md">
        <thead>
          <tr>
            <th className="border border-gray-200 bg-sky-50 text-left px-2 py-1">
              Country
            </th>
            <th
              className="border border-gray-200 bg-sky-50 text-left px-2 py-1"
              colSpan={2}
            >
              Currency
            </th>
            <th className="border border-gray-200 bg-sky-50 text-left px-2 py-1">
              Exchange Rate
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr key={row.country}>
                <td className="border border-gray-200 text-left px-2 py-1">
                  {row.country}
                </td>
                <td className="border border-gray-200 text-right font-mono px-2 py-1">
                  {row.code}
                </td>
                <td className="border border-gray-200 text-left px-2 py-1">
                  {row.amount} {row.currency}
                </td>
                <td className="border border-gray-200 text-right font-mono px-2 py-1">
                  {row.rate}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Loader>
  )
}
