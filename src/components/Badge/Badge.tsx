import { mergeProps, useRender } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/classnames.js'
import { textVariants } from '../Text/Text.js'

const badgeVariants = cva(
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
        default: 'bg-background-active',
        info: 'bg-info',
        warning: 'bg-warning',
        success: 'bg-positive',
        error: 'bg-negative',
      },
      size: {
        sm: [textVariants({ variant: 'small' }), 'h-4', 'min-w-4', 'px-2'],
        md: [textVariants({ variant: 'normal' }), 'h-5', 'min-w-5', 'px-3'],
        lg: [textVariants({ variant: 'medium' }), 'h-6', 'min-w-6', 'px-4'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

function Badge({
  className,
  variant = 'default',
  render,
  ...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: 'badge',
      variant,
    },
  })
}
export { Badge, badgeVariants }
