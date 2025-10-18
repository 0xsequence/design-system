import {
  useEffect,
  type ChangeEvent,
  type ComponentProps,
  type ComponentType,
  type FocusEvent,
  type ReactNode,
} from 'react'
import type { IconProps } from 'src/icons/types.js'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../InputGroup/InputGroup.js'
import { textVariants } from '../Text/Text.js'

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`)

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

interface NumericInputProps extends ComponentProps<'input'> {
  decimals?: number
  leftIcon?: ComponentType<IconProps>
  rightIcon?: ComponentType<IconProps>
  controls?: ReactNode
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

export const NumericInput = (props: NumericInputProps) => {
  const {
    className,
    id,
    name = 'amount',
    placeholder = '0',
    onChange,
    onBlur,
    decimals,
    value,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    controls,
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
    <InputGroup className={className}>
      <InputGroupInput
        className={textVariants({ variant: 'large' })}
        id={id ?? name}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        inputMode="decimal"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        type="text"
        pattern="^[0-9]*[.,]?[0-9]*$"
        placeholder={placeholder}
        minLength={1}
        maxLength={79}
        {...rest}
      />

      {LeftIcon && (
        <InputGroupAddon align="inline-start">
          <LeftIcon size="sm" />
        </InputGroupAddon>
      )}
      {RightIcon && (
        <InputGroupAddon align="inline-end">
          <RightIcon size="sm" />
        </InputGroupAddon>
      )}
      {controls && (
        <InputGroupAddon align="inline-end">{controls}</InputGroupAddon>
      )}
    </InputGroup>
  )
}
