import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

import { cn } from '~/utils'

const cardVariants = cva(['overflow-hidden', 'rounded-xl', 'p-4', 'w-full'], {
  variants: {
    clickable: {
      true: 'hover:opacity-80 cursor-pointer focus:ring-2 focus:ring-focus focus:outline-hidden',
    },
    disabled: {
      true: 'opacity-50 cursor-default pointer-events-none',
    },
    outlined: {
      true: 'border border-border-normal bg-transparent',
      false: 'bg-background-secondary',
    },
    blur: {
      true: 'backdrop-blur-xs',
    },
  },
  defaultVariants: {
    outlined: false,
  },
})

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

export const Card = (props: CardProps) => {
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
}
