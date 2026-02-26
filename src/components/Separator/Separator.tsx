import { type ComponentProps } from 'react'
import { cn } from 'src/utils/classnames.js'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: ComponentProps<'div'> & {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}) {
  return (
    <div
      data-slot="separator"
      role={decorative ? 'none' : 'separator'}
      aria-orientation={orientation === 'vertical' ? 'vertical' : undefined}
      className={cn(
        'bg-border-normal shrink-0',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
}

export { Separator }
