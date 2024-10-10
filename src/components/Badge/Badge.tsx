import { cva, VariantProps } from 'class-variance-authority'
import { CSSProperties, ReactElement } from 'react'

import { textVariants } from '~/tokens/typography'

const badgeVariants = cva(
  [
    'inline-flex',
    'flex-shrink-0',
    'place-items-center',
    'rounded-full',
    'text-white',
    'whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        info: ['bg-info'],
        warning: ['bg-warning'],
        success: ['bg-positive'],
        error: ['bg-negative'],
      },

      size: {
        sm: [textVariants({ variant: 'small' }), 'h-4', 'min-w-4', 'px-2'],
        md: [textVariants({ variant: 'normal' }), 'h-5', 'min-w-5', 'px-3'],
        lg: [textVariants({ variant: 'medium' }), 'h-6', 'min-w-6', 'px-4'],
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
)

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string
  style?: CSSProperties
  value: ReactElement | string | number
}

export const Badge = (props: BadgeProps) => {
  const { className, value, variant = 'info', size = 'md', ...rest } = props

  return (
    <div className={badgeVariants({ variant, size, className })} {...rest}>
      {value}
    </div>
  )
}
