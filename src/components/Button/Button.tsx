import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { focusRingVariants } from 'src/styles.js'
import { cn } from 'src/utils/classnames.js'

import { textVariants } from '../Text/Text.js'

const buttonVariants = cva(
  [
    'inline-flex items-center gap-2 whitespace-nowrap overflow-hidden text-decoration-none cursor-pointer',
    'disabled:cursor-default disabled:opacity-50',

    // Icon specific styles
    '[&.h-7>svg]:not(.size-*):!size-4 [&>svg]:not(.size-*):!size-5',

    focusRingVariants(),
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-primary text-white hover:opacity-80 border-1 border-transparent bg-origin-border',
        secondary:
          'bg-background-secondary text-primary border-1 border-border-button hover:border-border-hover hover:bg-background-hover',
        outline:
          'bg-transparent text-primary border-1 border-border-button hover:border-border-hover',
        glass: 'bg-background-glass text-primary hover:bg-background-glass/80',
        ghost:
          'bg-transparent hover:bg-background-glass text-primary hover:text-primary',
        raised: 'bg-background-raised text-primary',
        emphasis: 'bg-primary text-background-primary hover:bg-primary/80',
        destructive: 'bg-destructive text-white hover:bg-destructive/80',
        text: [
          'bg-transparent text-primary rounded-xs !p-0 h-auto w-auto min-w-0',
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
          'min-w-7 h-7 px-2 gap-1',
        ],
        sm: [
          textVariants({ variant: 'normal', fontWeight: 'bold' }),
          'min-w-9 h-9 px-4',
        ],
        md: [
          textVariants({ variant: 'normal', fontWeight: 'bold' }),
          'min-w-11 h-11 px-4',
        ],
        lg: [
          textVariants({ variant: 'normal', fontWeight: 'bold' }),
          'min-w-[52px] h-[52px] px-5',
        ],
      },
      disabled: {
        true: 'cursor-default opacity-50',
        false: 'cursor-pointer',
      },
      iconOnly: {
        true: 'p-0 shrink-0 items-center justify-center',
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
  shape,
  iconOnly,
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
      className={cn(
        buttonVariants({ variant, size, shape, iconOnly, disabled }),
        className
      )}
      disabled={disabled}
      {...props}
    />
  )
}
export { Button, buttonVariants }
