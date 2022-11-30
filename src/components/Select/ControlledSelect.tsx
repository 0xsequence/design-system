import { Control, Controller } from 'react-hook-form'

import { Select, SelectProps } from './Select'

type ControlledSelectProps = SelectProps & {
  control: Control
  defaultValue?: string
  name: string
  onValueChange: (value: string) => void
  rules?: {}
}

export const ControlledSelect = ({
  defaultValue,
  name,
  control,
  onValueChange,
  rules,
  ...selectProps
}: ControlledSelectProps) => (
  <Controller
    defaultValue={defaultValue}
    name={name}
    control={control}
    rules={rules}
    render={({ field }) => (
      <Select
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        {...field}
        {...selectProps}
      />
    )}
  />
)
