import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'

import { cn } from '../../utils/classnames.js'

const scrollVariants = cva(
  ['w-full h-full bg-background-primary focus:outline-hidden'],
  {
    variants: {
      direction: {
        vertical: ['h-full overflow-y-auto overscroll-y-contain'],
        horizontal: ['overflow-x-auto overscroll-x-contain w-full'],
      },
    },
    defaultVariants: {
      direction: 'vertical',
    },
  }
)

const overlayVariants = cva(['relative w-full h-full'], {
  variants: {
    direction: {
      vertical: [
        'before:absolute before:z-10 before:pointer-events-none before:left-0 before:top-0 before:w-full before:h-4',
        'before:bg-linear-to-t before:from-transparent before:to-background-primary',
        'after:absolute after:z-10 after:pointer-events-none after:left-0 after:bottom-0 after:w-full after:h-4',
        'after:bg-linear-to-b after:from-transparent after:to-background-primary',
      ],
      horizontal: [
        'before:absolute before:z-10 before:pointer-events-none before:left-0 before:top-0 before:h-full before:w-4',
        'before:bg-linear-to-l before:from-transparent before:to-background-primary',
        'after:absolute after:z-10 after:pointer-events-none after:right-0 after:top-0 after:h-full after:w-4',
        'after:bg-linear-to-r after:from-transparent after:to-background-primary',
      ],
    },
    shadows: {
      true: '',
      false: 'before:hidden after:hidden',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    shadows: true,
  },
})

interface ScrollProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof overlayVariants> {
  contentProps?: HTMLAttributes<HTMLDivElement>
}

export const Scroll = (props: ScrollProps) => {
  const {
    children,
    shadows = true,
    direction = 'vertical',
    contentProps,
    className,
    ...rest
  } = props

  return (
    <div
      className={cn(overlayVariants({ direction, shadows }), className)}
      {...rest}
    >
      <div className={cn(scrollVariants({ direction }))} {...contentProps}>
        {children}
      </div>
    </div>
  )
}
