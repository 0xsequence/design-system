import * as SwitchPrimitive from '@radix-ui/react-switch'

import { Field, type FieldProps } from '~/components/Field/index.js'
import { cn } from '~/utils/classnames.js'

export type SwitchProps = FieldProps & SwitchPrimitive.SwitchProps

export const Switch = (props: SwitchProps) => {
  const {
    disabled,
    label,
    labelLocation = 'left',
    description,
    id,
    name,
    ...rest
  } = props

  return (
    <Field
      disabled={disabled}
      id={id ?? name}
      label={label}
      labelLocation={labelLocation}
      description={description}
      className="flex whitespace-nowrap"
    >
      <SwitchPrimitive.Root
        className={cn(
          'relative w-12 h-7 p-1 rounded-full bg-background-input cursor-pointer border-none disabled:cursor-default disabled:opacity-50 data-[state=checked]:bg-gradient-primary',
          'outline-hidden ring-inset ring-1 ring-border-normal data-[state=checked]:ring-transparent focus-visible:ring-2 focus-visible:ring-border-focus!'
        )}
        disabled={disabled}
        {...rest}
      >
        <div className="relative w-full h-full">
          <SwitchPrimitive.Thumb className="absolute top-0 left-0 w-5 h-5 bg-border-normal rounded-full transition-transform duration-100 ease-out will-change-transform translate-x-0 data-[state=checked]:translate-x-5 data-[state=checked]:bg-white" />
        </div>
      </SwitchPrimitive.Root>
    </Field>
  )
}
