import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'
import { cn } from 'src/utils/classnames.js'

import { textVariants } from '../Text/Text.js'

const alertVariants = cva(
  [
    textVariants({ variant: 'normal' }),
    'relative w-full rounded-xl border-2 px-4 py-3 grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current text-white *:data-[slot=alert-description]:text-current/80',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-background-primary border-primary',
        info: 'bg-info/80 border-info',
        success: 'bg-success/80 border-success',
        warning: 'bg-warning/80 border-warning',
        error: 'bg-destructive/80 border-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        textVariants({ variant: 'normal-bold' }),
        'col-start-2 line-clamp-1 min-h-4',
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        textVariants({ variant: 'normal' }),
        'col-start-2 grid justify-items-start gap-1 [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertDescription, AlertTitle }
