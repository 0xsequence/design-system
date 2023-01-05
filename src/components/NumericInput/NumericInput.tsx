import { ChangeEvent, FocusEvent, forwardRef } from 'react'

import { PolymorphicProps, PolymorphicRef } from '../Box'
import { TextInput } from '../TextInput'
import { TextInputProps } from '../TextInput/TextInput'

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`)

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export type NumericInputProps = TextInputProps & {
  name?: string
  decimals?: number
}

export const NumericInput = forwardRef(
  (
    props: PolymorphicProps<NumericInputProps, 'input'>,
    ref: PolymorphicRef<'input'>
  ) => {
    const { name = 'amount', placeholder, onChange, onBlur, ...rest } = props

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
      let { value } = ev.target

      // Replace commas with decimals
      value = value.replace(/,/g, '.')

      // Add leading zero if needed
      if (value.startsWith('.')) {
        value = '0' + value
      }

      // strip leading zeros
      if (value.startsWith('0')) {
        value = value.replace(/^0+(?=\d)/, '')
      }

      if (value === '' || inputRegex.test(escapeRegExp(value))) {
        onChange?.({ ...ev, target: { ...ev.target, value } })
      }
    }

    const handleBlur = (ev: FocusEvent<HTMLInputElement>) => {
      const { value } = ev.target

      let v = value

      if (v.endsWith('.')) {
        v = v.slice(0, -1)
      }

      if (v.endsWith('.0')) {
        v = v.slice(0, -2)
      }

      if (v === '0') {
        v = ''
      }

      onBlur?.(ev)

      if (v !== value) {
        onChange?.({ ...ev, target: { ...ev.target, value: v } })
      }
    }

    return (
      <TextInput
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        inputMode="decimal"
        autoComplete="off"
        autoCorrect="off"
        type="text"
        pattern="^[0-9]*[.,]?[0-9]*$"
        placeholder={placeholder || '0'}
        minLength={1}
        maxLength={79}
        spellCheck="false"
        ref={ref}
        {...rest}
      />
    )
  }
)
