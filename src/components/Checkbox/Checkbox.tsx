import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cva, type VariantProps } from 'class-variance-authority'

import { CheckmarkIcon } from '../../icons/index.js'
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
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer shrink-0 text-primary flex items-center justify-center bg-background-input rounded-sm cursor-pointer',
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
        <CheckmarkIcon size={size === 'lg' ? 'sm' : 'xxs'} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
