import { cn } from '../../utils/classnames.js'

import { textVariants } from '../Text/Text.js'

export const Kbd = ({ className, ...props }: React.ComponentProps<'kbd'>) => {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        textVariants({ variant: 'small', color: 'muted' }),
        'bg-transparent border border-border-normal pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 select-none',
        className
      )}
      {...props}
    />
  )
}

export const KbdGroup = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  )
}
