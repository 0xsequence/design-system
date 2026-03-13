import type { ComponentProps } from 'react'

import { cn } from '../../utils/classnames.js'

export const Kbd = ({ className, ...props }: ComponentProps<'kbd'>) => {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'text-xs text-muted bg-transparent border border-border-normal pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 select-none',
        className
      )}
      {...props}
    />
  )
}

export const KbdGroup = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  )
}
