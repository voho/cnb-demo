import React, { useContext } from 'react'
import { FxContext } from '../context/FxContext'
import { CurrencySelect } from '../components/CurrencySelect'
import { NumberField } from '../components/NumberField'

const Form: React.FC = () => {
  const {
    setSourceAmount,
    sourceCurrency,
    setSourceCurrency,
    targetCurrency,
    setTargetCurrency,
    sourceAmount,
    targetAmount,
  } = useContext(FxContext)

  return (
    <form>
      <div className="flex flex-row gap-4 items-center place-content-around">
        <div>
          <label>
            Enter Amount
            <br />
            <NumberField
              name="source_amount"
              value={sourceAmount}
              onChange={setSourceAmount}
            />
          </label>
          <CurrencySelect
            name="source_currency"
            value={sourceCurrency}
            onChange={setSourceCurrency}
          />
        </div>
        <div>
          Magic
          <br />
          <span className="text-4xl">&rarr;</span>
        </div>
        <div>
          <label>
            Conversion Result
            <br />
            <NumberField
              name="target_amount"
              value={targetAmount}
              readOnly={true}
            />
          </label>
          <CurrencySelect
            name="target_currency"
            value={targetCurrency}
            onChange={setTargetCurrency}
          />
        </div>
      </div>
    </form>
  )
}

export const FxConvertor: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-5">
        Use our amazing tool to convert currencies, free of charge!
      </h1>

      <div className="p-3 bg-sky-200 my-5 rounded-lg shadow-md">
        <Form />
      </div>

      <p className="text-lg">
        Just edit the fields and the results will be computed for you. We are
        using the state-of-art machine learning and quantum computing to fetch
        the best rates from ČNB.
      </p>
    </div>
  )
}
