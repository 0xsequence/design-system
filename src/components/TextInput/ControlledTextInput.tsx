import { Control, Controller } from 'react-hook-form'

import { PolymorphicProps } from '~/components/Box'

import { TextInput, TextInputProps } from './TextInput'

type ControlledTextInputProps = PolymorphicProps<TextInputProps, 'input'> & {
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
