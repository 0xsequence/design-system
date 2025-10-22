import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'

import { focusRingVariants } from '../../styles.js'
import { cn } from '../../utils/classnames.js'

export const cardVariants = cva(
  ['overflow-hidden', 'rounded-xl', 'p-4', 'w-full'],
  {
    variants: {
      variant: {
        default: 'bg-background-secondary border-1 border-border-card',
        outline: 'bg-transparent border-1 border-border-card',
        muted: 'bg-background-muted border-1 border-border-card',
      },
      clickable: {
        true: ['cursor-pointer hover:opacity-80', focusRingVariants()],
      },
      disabled: {
        true: 'opacity-50 cursor-default pointer-events-none hover:border-border-card',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface CardProps
  extends ComponentProps<'div'>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

export const Card = (props: CardProps) => {
  const {
    ref,
    className,
    children,
    variant,
    clickable,
    disabled,
    asChild,
    ...rest
  } = props

  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      ref={ref}
      className={cn(
        cardVariants({
          variant,
          clickable,
          disabled,
        }),
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}
