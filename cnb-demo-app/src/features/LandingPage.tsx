import React from 'react'
import { FxConvertor } from './FxConvertor'
import { FxTable } from './FxTable'

export const LandingPage: React.FC = (props) => {
  return (
    <div>
      <div className="bg-sky-300">
        <div className="p-5 w-[80%] min-w-[800px] max-w-[1200px] mx-auto">
          <FxConvertor />
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="p-5 w-[80%] min-w-[800px] max-w-[1200px] mx-auto">
          <FxTable />
        </div>
      </div>
    </div>
  )
}
