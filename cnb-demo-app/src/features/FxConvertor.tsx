import React, { useContext } from "react"
import { FxContext } from "../context/FxContext"

const Form: React.FC = () => {
  const {} = useContext(FxContext)
  
  return (
    <form>
      <div className="flex flex-row gap-4 items-center place-content-evenly">
        <div>
          <label>Source Amount<br />
            <input type="text" name="amount" className="my-3 p-3 font-bold" />
          </label>
        </div>
        <div>
          <label>Source currency<br />
          <select name="source_currency">
            <option>USD</option>
          </select>
          </label>
        </div>
        <div>
          <span className="text-4xl">&rarr;</span>
        </div>
        <div>
          <label>Target Amount<br />
            <input type="text" name="amount" readOnly={true}  className="my-3 p-3 font-bold" />
          </label>
        </div>
        <div>
          <label>Target currency<br />
          <select name="target_currency">
            <option>USD</option>
          </select>
          </label>
        </div>
      </div>      
    </form>
  )
}

export const FxConvertor: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold py-8">Use our amazing AI-powered tool to convert currencies, free of charge!</h1>
      
      <div className="p-3 bg-sky-200 my-5 rounded-lg">
       <Form />
      </div>

      <p className="text-lg">Just edit the fields and the results will be computed for you. We are using the state-of-art machine learning and quantum computing to fetch the best rates from ČNB.</p>
    </div>
  )
}