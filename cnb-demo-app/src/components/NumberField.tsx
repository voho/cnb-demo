import { useContext } from 'react'
import { FxContext } from '../context/FxContext'

interface Props {
  name: string
  value?: string
  readOnly?: boolean
  onChange?: (newValue: string) => void
}

export const NumberField: React.FC<Props> = (props) => {
  const { loading } = useContext(FxContext)

  return (
    <input
      type="text"
      name={props.name}
      className="my-3 p-3 font-bold"
      disabled={loading || (props.readOnly ?? false)}
      value={props.value ?? ''}
      readOnly={props.readOnly ?? false}
      onChange={(e) => {
        if (props.onChange) {
          props.onChange(e.currentTarget.value)
        }
      }}
    />
  )
}
