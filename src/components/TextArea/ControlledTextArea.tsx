import type { ComponentProps } from 'react'
import { Controller, type Control } from 'react-hook-form'

import { TextArea } from './TextArea.js'

type ControlledTextAreaProps = ComponentProps<typeof TextArea> & {
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
    render={({ field, fieldState }) => (
      <TextArea {...field} {...rest} aria-invalid={fieldState.invalid} />
    )}
  />
)
