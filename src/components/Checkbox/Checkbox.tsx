import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'
import { cva, type VariantProps } from 'class-variance-authority'
import { CheckIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from '../../styles.js'
import { cn } from '../../utils/classnames.js'

const checkboxVariants = cva('', {
  variants: {
    size: {
      sm: 'size-5',
      lg: 'size-7',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

function Checkbox({
  className,
  size = 'sm',
  ...props
}: ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer shrink-0 text-inverse flex items-center justify-center rounded cursor-pointer transition-background duration-150 bg-background-input data-checked:bg-background-inverse data-checked:border-background-inverse!',
        checkboxVariants({ size }),
        focusRingVariants(),
        inputBorderStyle,
        disabledStyle,
        'aria-invalid:outline-destructive aria-invalid:border-destructive',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className={size === 'lg' ? 'size-5' : 'size-4'} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, CheckboxPrimitive }
