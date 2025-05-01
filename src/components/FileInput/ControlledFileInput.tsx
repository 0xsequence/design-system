import { Control, Controller } from 'react-hook-form'

import { FileInput, FileInputProps } from './FileInput.js'

interface ControlledFileInputProps
  extends Omit<FileInputProps, 'value' | 'onChange'> {
  control: Control
  defaultValue?: string
  name: string
  rules?: {}
}

export const ControlledFileInput = ({
  defaultValue,
  name,
  control,
  rules,
  ...inputProps
}: ControlledFileInputProps) => (
  <Controller
    defaultValue={defaultValue}
    name={name}
    control={control}
    rules={rules}
    render={({ field: { value: _v, onChange: _c, ...fieldProps } }) => (
      <FileInput {...fieldProps} {...inputProps} />
    )}
  />
)
