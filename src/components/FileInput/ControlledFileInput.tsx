import { Control, Controller } from 'react-hook-form'

import { PolymorphicProps } from '~/components/Box'

import { FileInput, FileInputProps } from './FileInput'

type ControlledFileInputProps = PolymorphicProps<FileInputProps, 'input'> & {
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
