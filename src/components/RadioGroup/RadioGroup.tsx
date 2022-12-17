import * as RadioPrimitive from '@radix-ui/react-radio-group'
import { forwardRef, Ref } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { LabelledField } from '~/components/LabelledField'

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

const RadioOption = ({
  id,
  label,
  size = 'sm',
  value,
  disabled,
}: RadioOptionProps) => (
  <Box alignItems="center">
    <LabelledField
      disabled={disabled}
      display="flex"
      forId={id}
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
    </LabelledField>
  </Box>
)

export const RadioGroup = forwardRef(
  (
    {
      flexDirection = 'column',
      disabled = false,
      gap = '2',
      name,
      options,
      size = 'sm',
      ...props
    }: RadioGroupProps,
    ref: Ref<HTMLDivElement>
  ) => (
    <RadioPrimitive.Root disabled={disabled} name={name} ref={ref} {...props}>
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
)
