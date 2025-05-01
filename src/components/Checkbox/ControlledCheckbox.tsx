import { type Control, Controller } from 'react-hook-form'

import { Checkbox, type CheckboxProps } from './Checkbox.js'

type ControlledCheckboxProps = CheckboxProps & {
  control: Control
  name: string
  onCheckedChange: (checked: boolean) => void
  rules?: {}
}

export const ControlledCheckbox = ({
  control,
  defaultChecked,
  onCheckedChange,
  name,
  rules,
  ...checkboxProps
}: ControlledCheckboxProps) => (
  <Controller
    defaultValue={defaultChecked}
    name={name}
    control={control}
    rules={rules}
    render={({ field: { ref: _, ...fieldProps } }) => (
      <Checkbox
        onCheckedChange={onCheckedChange}
        defaultChecked={defaultChecked}
        {...fieldProps}
        {...checkboxProps}
      />
    )}
  />
)
