import type { ComponentProps } from 'react'
import { Controller, type Control } from 'react-hook-form'

import { TextInput } from './TextInput.js'

type ControlledTextInputProps = ComponentProps<typeof TextInput> & {
  control: Control
  defaultValue?: string
  name: string
  rules?: {}
}

export const ControlledTextInput = ({
  defaultValue,
  name,
  control,
  rules,
  ...inputProps
}: ControlledTextInputProps) => (
  <Controller
    defaultValue={defaultValue}
    name={name}
    control={control}
    rules={rules}
    render={({ field }) => <TextInput {...field} {...inputProps} />}
  />
)
