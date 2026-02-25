import { Switch as SwitchPrimitive } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from '../../styles.js'
import { cn } from '../../utils/classnames.js'

const switchVariants = cva(
  [
    'peer rounded-full bg-background-input bg-origin-border cursor-pointer data-[checked]:bg-gradient-primary data-[checked]:border-transparent!',
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

export type SwitchProps = VariantProps<typeof switchVariants> &
  ComponentProps<typeof SwitchPrimitive.Root>

export const Switch = (props: SwitchProps) => {
  const { disabled, id, name, size, ...rest } = props

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        switchVariants({ size }),
        focusRingVariants(),
        inputBorderStyle,
        disabledStyle
      )}
      disabled={disabled}
      id={id ?? name}
      name={name}
      {...rest}
    >
      <div className="relative w-full h-full">
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className="absolute top-0 left-0 bg-primary/50 rounded-full transition-transform duration-100 ease-out will-change-transform translate-x-0 data-[checked]:bg-white data-[checked]:translate-x-full"
        />
      </div>
    </SwitchPrimitive.Root>
  )
}

export { SwitchPrimitive }
