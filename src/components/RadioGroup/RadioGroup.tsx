import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { type ComponentProps } from 'react'

import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from '../../styles.js'
import { cn } from '../../utils/classnames.js'

function RadioGroup({
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}
function RadioGroupItem({
  className,
  ...props
}: ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'bg-background-input size-5 aspect-square shrink-0 rounded-full',
        focusRingVariants(),
        inputBorderStyle,
        disabledStyle,
        'aria-invalid:outline-destructive aria-invalid:border-destructive',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <div className="size-3 bg-primary rounded-full" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}
export { RadioGroup, RadioGroupItem }
