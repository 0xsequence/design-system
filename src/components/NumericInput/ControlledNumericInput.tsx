import type { ComponentProps } from 'react'
import { Controller, type Control } from 'react-hook-form'

import { NumericInput } from './NumericInput.js'

type ControlledTextAreaProps = ComponentProps<typeof NumericInput> & {
  control: Control
  defaultValue?: string
  name: string
  rules?: {}
}

export const ControlledNumericInput = ({
  defaultValue,
  name,
  control,
  rules,
  ...rest
}: ControlledTextAreaProps) => (
  <Controller
    defaultValue={defaultValue}
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <NumericInput {...field} {...rest} aria-invalid={fieldState.invalid} />
    )}
  />
)
