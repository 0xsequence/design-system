import * as RadioPrimitive from '@radix-ui/react-radio-group'
import { forwardRef, Ref } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Field } from '~/components/Field'

import {
  indicatorVariants,
  radioItemVariants,
  RadioItemVariants,
} from './styles.css'

type RadioOption = {
  label: string
  value: string
  disabled?: boolean
}

export type RadioGroupProps = RadioItemVariants &
  RadioPrimitive.RadioGroupProps & {
    disabled?: boolean
    flexDirection?: BoxProps['flexDirection']
    gap?: BoxProps['gap']
    name: string
    options: RadioOption[]
  }

type RadioOptionProps = RadioItemVariants & {
  id: string
  label: string
  value: string
  disabled?: boolean
}

const RadioOption = (props: RadioOptionProps) => {
  const { id, label, size = 'sm', value, disabled } = props

  return (
    <Box alignItems="center">
      <Field
        disabled={disabled}
        display="flex"
        id={id}
        label={label}
        labelLocation="right"
      >
        <RadioPrimitive.Item
          className={radioItemVariants({ size })}
          value={value}
          id={id}
          disabled={disabled}
        >
          <RadioPrimitive.Indicator className={indicatorVariants({ size })} />
        </RadioPrimitive.Item>
      </Field>
    </Box>
  )
}

export const RadioGroup = forwardRef(
  (props: RadioGroupProps, ref: Ref<HTMLDivElement>) => {
    const {
      flexDirection = 'column',
      disabled = false,
      gap = '2',
      name,
      options,
      size = 'sm',
      ...rest
    } = props

    return (
      <RadioPrimitive.Root disabled={disabled} name={name} ref={ref} {...rest}>
        <Box flexDirection={flexDirection} gap={gap}>
          {options.map(({ label, value, disabled }) => (
            <RadioOption
              id={`${name}-${value}`}
              key={value}
              label={label}
              size={size}
              value={value}
              disabled={disabled}
            />
          ))}
        </Box>
      </RadioPrimitive.Root>
    )
  }
)
