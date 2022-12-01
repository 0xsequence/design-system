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
}

const RadioOption = ({ id, label, size = 'sm', value }: RadioOptionProps) => (
  <Box alignItems="center">
    <LabelledField label={label} labelLocation="right" forId={id}>
      <RadioPrimitive.Item
        className={radioItemVariants({ size })}
        value={value}
        id={id}
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
        {options.map(({ label, value }) => (
          <RadioOption
            id={`${name}-${value}`}
            key={value}
            label={label}
            size={size}
            value={value}
          />
        ))}
      </Box>
    </RadioPrimitive.Root>
  )
)
