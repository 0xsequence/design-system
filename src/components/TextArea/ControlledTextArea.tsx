import { Control, Controller } from 'react-hook-form'

import { TextArea, type TextAreaProps } from './TextArea.js'

type ControlledTextAreaProps = TextAreaProps & {
  control: Control
  defaultValue?: string
  name: string
  rules?: {}
}

export const ControlledTextArea = ({
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
    render={({ field }) => <TextArea {...field} {...rest} />}
  />
)
