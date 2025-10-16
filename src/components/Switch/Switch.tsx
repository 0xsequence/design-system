import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cva, type VariantProps } from 'class-variance-authority'

import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from '../../styles.js'
import { cn } from '../../utils/classnames.js'
import { Field, type FieldProps } from '../Field/Field.js'

const switchVariants = cva(
  [
    'rounded-full bg-background-input bg-origin-border cursor-pointer data-[state=checked]:bg-gradient-primary data-[state=checked]:border-transparent!',
  ],
  {
    variants: {
      size: {
        sm: 'w-[32px] h-5 p-0.75 [&_span]:size-[12px]',
        md: 'w-[46px] h-7 p-1 [&_span]:size-[18px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

export type SwitchProps = FieldProps &
  VariantProps<typeof switchVariants> &
  SwitchPrimitive.SwitchProps

export const Switch = (props: SwitchProps) => {
  const {
    disabled,
    label,
    labelLocation = 'left',
    description,
    id,
    name,
    size,
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
          switchVariants({ size }),
          focusRingVariants(),
          inputBorderStyle,
          disabledStyle
        )}
        disabled={disabled}
        {...rest}
      >
        <div className="relative w-full h-full">
          <SwitchPrimitive.Thumb className="absolute top-0 left-0 bg-primary/50 rounded-full transition-transform duration-100 ease-out will-change-transform translate-x-0 data-[state=checked]:bg-white data-[state=checked]:translate-x-full" />
        </div>
      </SwitchPrimitive.Root>
    </Field>
  )
}
