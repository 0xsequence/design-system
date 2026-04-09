import { mergeProps, useRender } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../utils/classnames.js'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full shrink-0 whitespace-nowrap border',
  {
    variants: {
      variant: {
        default:
          'border-purple-200 bg-purple-100 text-purple-900 dark:border-purple-600 dark:bg-purple-600 dark:text-purple-50',
        neutral:
          'border-slate-300 bg-slate-100 text-slate-900 dark:border-slate-600 dark:bg-slate-600 dark:text-slate-50',
        outline:
          'border-slate-300 bg-transparent text-slate-900 dark:border-slate-600 dark:bg-transparent dark:text-slate-50',
        info: 'border-blue-200 bg-blue-100 text-blue-900 dark:border-blue-600 dark:bg-blue-600 dark:text-blue-50',
        warning:
          'border-orange-200 bg-orange-100 text-orange-900 dark:border-orange-600 dark:bg-orange-600 dark:text-orange-50',
        success:
          'border-emerald-200 bg-emerald-100 text-emerald-900 dark:border-emerald-600 dark:bg-emerald-600 dark:text-emerald-50',
        error:
          'border-red-200 bg-red-100 text-red-900 dark:border-red-600 dark:bg-red-600 dark:text-red-50',
      },
      size: {
        default: ['text-sm h-7 min-w-4 px-2 py-2 gap-1 [&_svg]:size-3'],
        sm: ['text-xs h-4.5 min-w-4 px-1 py-1 gap-1 [&_svg]:size-2.5'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function Badge({
  className,
  variant = 'default',
  size = 'default',
  render,
  ...props
}: useRender.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: 'span',
    props: mergeProps<'span'>(
      {
        className: cn(badgeVariants({ variant, size }), className),
      },
      props
    ),
    render,
    state: {
      slot: 'badge',
      variant,
      size,
    },
  })
}
export { Badge, badgeVariants }
