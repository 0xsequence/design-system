import { Controller, type Control } from 'react-hook-form'

import { Switch, type SwitchProps } from './Switch.js'

type ControlledSwitchProps = SwitchProps & {
  control: Control
  name: string
  onCheckedChange: (checked: boolean) => void
  rules?: {}
}

export const ControlledSwitch = ({
  control,
  defaultChecked,
  onCheckedChange,
  name,
  rules,
  ...switchProps
}: ControlledSwitchProps) => (
  <Controller
    defaultValue={defaultChecked}
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <Switch
        onCheckedChange={onCheckedChange}
        defaultChecked={defaultChecked}
        {...field}
        {...switchProps}
        aria-invalid={fieldState.invalid}
      />
    )}
  />
)
