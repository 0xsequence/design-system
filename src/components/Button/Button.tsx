import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { focusRingVariants } from 'src/styles.js'
import { cn } from 'src/utils/classnames.js'

import { textVariants } from '../Text/Text.js'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-decoration-none cursor-pointer disabled:cursor-default disabled:opacity-50',
    focusRingVariants(),
  ],
  {
    variants: {
      variant: {
        ghost: 'bg-transparent hover:bg-background-glass text-primary',
        primary:
          'bg-gradient-primary text-white hover:opacity-80 border-1 border-transparent bg-origin-border',
        secondary:
          'bg-background-secondary text-primary border-1 border-border-button hover:border-border-hover hover:bg-background-hover',
        glass:
          'bg-background-glass text-primary border-1 border-border-button hover:border-border-hover hover:bg-background-hover',
        raised: 'bg-background-raised text-primary',
        destructive: 'bg-destructive text-white',
        text: [
          'bg-transparent text-muted rounded-xs',
          textVariants({ variant: 'small-bold' }),
        ],
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-lg',
      },
      size: {
        xs: [
          textVariants({ variant: 'xsmall', fontWeight: 'bold' }),
          'h-7 px-2',
        ],
        sm: [
          textVariants({ variant: 'normal', fontWeight: 'bold' }),
          'h-9 px-4',
        ],
        md: [
          textVariants({ variant: 'normal', fontWeight: 'bold' }),
          'h-11 px-4',
        ],
        lg: [
          textVariants({ variant: 'normal', fontWeight: 'bold' }),
          'h-[52px] px-5',
        ],
      },
      disabled: {
        true: 'cursor-default opacity-50',
        false: 'cursor-pointer',
      },
    },

    defaultVariants: {
      variant: 'secondary',
      shape: 'circle',
      size: 'md',
    },
  }
)

function Button({
  className,
  variant,
  size,
  disabled,
  asChild = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className, disabled }))}
      disabled={disabled}
      {...props}
    />
  )
}
export { Button, buttonVariants }
