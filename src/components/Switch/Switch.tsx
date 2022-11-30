import * as SwitchPrimitive from '@radix-ui/react-switch'
import { Control, Controller } from 'react-hook-form'

import * as styles from './styles.css'

export const Switch = (props: SwitchPrimitive.SwitchProps) => {
  return (
    <SwitchPrimitive.Root className={styles.root} {...props}>
      <SwitchPrimitive.Thumb className={styles.thumb} />
    </SwitchPrimitive.Root>
  )
}

type ControlledSwitchProps = SwitchPrimitive.SwitchProps & {
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
