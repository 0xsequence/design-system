import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes } from 'react'

import { focusRingVariants } from '~/styles.js'
import { cn } from '~/utils/classnames.js'

export const cardVariants = cva(
  [
    'overflow-hidden',
    'rounded-xl',
    'p-4',
    'w-full',
    'border',
    'border-border-card',
  ],
  {
    variants: {
      clickable: {
        true: ['cursor-pointer hover:opacity-80', focusRingVariants()],
      },
      disabled: {
        true: 'opacity-50 cursor-default pointer-events-none hover:border-border-card',
      },
      outlined: {
        true: 'bg-transparent',
        false: 'bg-background-secondary',
      },
      blur: {
        true: 'backdrop-blur-xs',
      },
    },
    defaultVariants: {
      outlined: false,
    },
  }
)

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    className,
    children,
    clickable,
    outlined,
    disabled,
    blur,
    asChild,
    ...rest
  } = props

  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      ref={ref}
      className={cn(
        cardVariants({
          clickable,
          outlined,
          disabled,
          blur,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
})
