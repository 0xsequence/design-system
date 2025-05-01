import { Control, Controller } from 'react-hook-form'

import { TextInput, type TextInputProps } from './TextInput.js'

type ControlledTextInputProps = TextInputProps & {
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
