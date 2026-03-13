import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import { cn } from 'src/utils/classnames.js'

const tagVariants = cva(
  [
    'text-xxs font-bold',
    'inline-flex items-center',
    'gap-0.5',
    'px-2',
    'py-1',
    'whitespace-nowrap',
    'bg-background-active',
    'text-primary',
    'rounded-xs',
  ],
  {
    variants: {
      // Add any variants here if needed in the future
    },
  }
)

interface TagProps extends ComponentProps<'div'>, VariantProps<typeof tagVariants> {
  className?: string
}

export const Tag = (props: TagProps) => {
  const { children, className, ...rest } = props

  return (
    <div className={cn(tagVariants({ className }), className)} {...rest}>
      {children}
    </div>
  )
}
