import React, { useContext } from "react"
import { FxContext } from "../context/FxContext"

const Form: React.FC = () => {
  const {} = useContext(FxContext)
  
  return (
    <form>
      <div className="flex flex-row gap-4 items-center place-content-around">
        <div>
          <label>Enter Amount<br />
            <input type="text" name="amount" className="my-3 p-3 font-bold" />
          </label>
          <select name="source_currency" className="ml-3 my-3 p-3 font-bold">
            <option>USD</option>
          </select>
        </div>
        <div>
          Magic<br />
          <span className="text-4xl">&rarr;</span>
        </div>
        <div>
        <label>Conversion Result<br />
            <input type="text" name="amount" readOnly={true}  className="my-3 p-3 font-bold" />
            </label>
          <select name="target_currency" className="ml-3 my-3 p-3 font-bold">
            <option>USD</option>
          </select>
        </div>
      </div>      
    </form>
  )
}

export const FxConvertor: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-5">Use our amazing AI-powered tool to convert currencies, free of charge!</h1>
      
      <div className="p-3 bg-sky-200 my-5 rounded-lg shadow-md">
       <Form />
      </div>

      <p className="text-lg">Just edit the fields and the results will be computed for you. We are using the state-of-art machine learning and quantum computing to fetch the best rates from ČNB.</p>
    </div>
  )
}