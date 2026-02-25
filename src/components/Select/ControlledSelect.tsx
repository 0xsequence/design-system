import type { ComponentProps } from 'react'
import { Controller, type Control } from 'react-hook-form'

import { Select } from './Select.js'

type ControlledSelectProps = Omit<ComponentProps<typeof Select.Helper>, 'onValueChange'> & {
  control: Control
  defaultValue?: string
  name: string
  onValueChange: (value: string) => void
  rules?: {}
}

export const ControlledSelect = ({
  control,
  defaultValue,
  name,
  onValueChange,
  rules,
  ...selectProps
}: ControlledSelectProps) => (
  <Controller
    defaultValue={defaultValue}
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <Select.Helper
        onValueChange={(value: unknown) => onValueChange(value as string)}
        defaultValue={defaultValue}
        {...field}
        {...selectProps}
        aria-invalid={fieldState.invalid}
      />
    )}
  />
)
