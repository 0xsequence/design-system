import type { ComponentProps } from 'react'
import { Controller, type Control } from 'react-hook-form'

import { Select } from './Select.js'

type ControlledSelectProps = ComponentProps<typeof Select.Helper> & {
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
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        {...field}
        {...selectProps}
        aria-invalid={fieldState.invalid}
      />
    )}
  />
)
