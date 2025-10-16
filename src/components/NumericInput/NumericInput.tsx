import { forwardRef, useEffect, type ChangeEvent, type FocusEvent } from 'react'

import {
  TextInput,
  type TextInputProps,
} from '~/components/TextInput/TextInput.js'

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`)

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export interface NumericInputProps
  extends Omit<TextInputProps, 'numeric' | 'type' | 'inputMode' | 'pattern'> {
  decimals?: number
}

function truncateDecimals(value: string, decimals?: number): string {
  if (decimals === undefined || !value.includes('.')) {
    return value
  }

  const [integerPart, decimalPart] = value.split('.')

  if (decimals === 0) {
    return integerPart
  }

  if (decimalPart && decimalPart.length > decimals) {
    return `${integerPart}.${decimalPart.slice(0, decimals)}`
  }

  return value
}

export const NumericInput = forwardRef<HTMLInputElement, NumericInputProps>(
  (props, ref) => {
    const {
      name = 'amount',
      placeholder,
      onChange,
      onBlur,
      decimals,
      value,
      ...rest
    } = props

    // Watch for changes in decimals prop and truncate value if needed
    useEffect(() => {
      if (value && typeof value === 'string' && decimals !== undefined) {
        const truncatedValue = truncateDecimals(value, decimals)

        if (truncatedValue !== value) {
          // Create a synthetic event to match the expected onChange signature
          const syntheticEvent = {
            target: { value: truncatedValue },
            currentTarget: { value: truncatedValue },
          } as ChangeEvent<HTMLInputElement>

          onChange?.(syntheticEvent)
        }
      }
    }, [decimals, value])

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
        // Apply decimal precision truncation if needed
        value = truncateDecimals(value, decimals)

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
        numeric={true}
        value={value}
        ref={ref}
        {...rest}
      />
    )
  }
)
