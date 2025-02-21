import { SwitchProps } from '@radix-ui/react-switch'
import { Control, Controller } from 'react-hook-form'

import { Switch } from './Switch'

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
    render={({ field: { ref: _, ...fieldProps } }) => (
      <Switch
        onCheckedChange={onCheckedChange}
        defaultChecked={defaultChecked}
        {...fieldProps}
        {...switchProps}
      />
    )}
  />
)
