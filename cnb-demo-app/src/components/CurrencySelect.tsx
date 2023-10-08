import { useContext } from 'react'
import { FxContext } from '../context/FxContext'

interface Props {
  name: string
  value?: string
  onChange?: (newValue: string) => void
}

export const CurrencySelect: React.FC<Props> = (props) => {
  const { loading, currencyCodes } = useContext(FxContext)

  return (
    <select
      name={props.name}
      className="ml-3 my-3 font-bold text-xl"
      disabled={loading}
      value={props.value ?? ''}
      onChange={(e) => {
        if (props.onChange) {
          props.onChange(e.currentTarget.value)
        }
      }}
    >
      {currencyCodes.map((currency) => {
        return (
          <option key={currency} value={currency}>
            {currency}
          </option>
        )
      })}
    </select>
  )
}
