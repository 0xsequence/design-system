import type { ComponentProps } from 'react'
import { Controller, type Control } from 'react-hook-form'

import { RadioGroup } from './RadioGroup.js'

type ControlledRadioGroupProps = Omit<ComponentProps<typeof RadioGroup>, 'onValueChange'> & {
  control: Control
  defaultValue?: string
  name: string
  onValueChange: (value: string) => void
  rules?: {}
}

export const ControlledRadioGroup = ({
  control,
  defaultValue,
  name,
  onValueChange,
  rules,
  ...radioProps
}: ControlledRadioGroupProps) => (
  <Controller
    defaultValue={defaultValue}
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <RadioGroup
        onValueChange={(value: unknown) => onValueChange(value as string)}
        defaultValue={defaultValue}
        {...field}
        {...radioProps}
        aria-invalid={fieldState.invalid}
      />
    )}
  />
)
