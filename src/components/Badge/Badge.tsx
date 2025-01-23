import { VariantProps, cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import { ReactNode, HTMLAttributes } from 'react'

export const badgeVariants = cva(
  [
    'inline-flex',
    'shrink-0',
    'items-center',
    'rounded-full',
    'text-white',
    'whitespace-nowrap',
    'font-normal',
  ],
  {
    variants: {
      variant: {
        info: 'bg-info',
        warning: 'bg-warning',
        success: 'bg-positive',
        error: 'bg-negative',
      },
      size: {
        sm: ['text-xs', 'h-4', 'min-w-4', 'px-2'],
        md: ['text-sm', 'h-5', 'min-w-5', 'px-3'],
        lg: ['text-base', 'h-6', 'min-w-6', 'px-4'],
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
    },
  }
)

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  value: ReactNode
}

export const Badge = (props: BadgeProps) => {
  const { className, value, variant, size, ...rest } = props

  return (
    <div
      className={clsx(badgeVariants({ variant, size }), className)}
      {...rest}
    >
      {value}
    </div>
  )
}
