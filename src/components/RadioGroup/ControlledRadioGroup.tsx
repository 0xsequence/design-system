import { Control, Controller } from 'react-hook-form'

import { RadioGroup, type RadioGroupProps } from './RadioGroup.js'

type ControlledRadioGroupProps = RadioGroupProps & {
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
    render={({ field }) => (
      <RadioGroup
        onValueChange={onValueChange}
        defaultValue={defaultValue}
        {...field}
        {...radioProps}
      />
    )}
  />
)
