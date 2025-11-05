import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'
import { cn } from 'src/utils/classnames.js'

import { Button } from '../Button/Button.js'
import { textVariants } from '../Text/Text.js'

const alertVariants = cva(
  [
    textVariants({ variant: 'normal' }),
    'text-primary relative w-full rounded-xl border-1 px-4 py-3 grid gap-y-0.5 items-center grid-cols-[auto_1fr_auto]',
    'has-[>svg]:gap-x-2 [&>svg]:size-4',
  ],
  {
    variants: {
      variant: {
        info: [
          'bg-indigo-200  border-indigo-500 [&>svg]:text-indigo-700 [&_[data-slot=alert-button]]:text-indigo-700',
          'dark:bg-indigo-950 dark:border-indigo-900 dark:[&>svg]:text-indigo-400 dark:[&_[data-slot=alert-button]]:text-indigo-400',
        ],
        success: [
          'bg-green-200 border-green-500 [&>svg]:text-green-700 [&_[data-slot=alert-button]]:text-green-700',
          'dark:bg-green-950 dark:border-green-900 dark:[&>svg]:text-green-400 dark:[&_[data-slot=alert-button]]:text-green-400',
        ],
        warning: [
          'bg-yellow-100 border-yellow-500 [&>svg]:text-yellow-700 [&_[data-slot=alert-button]]:text-yellow-700',
          'dark:bg-yellow-950 dark:border-yellow-900 dark:[&>svg]:text-yellow-400 dark:[&_[data-slot=alert-button]]:text-yellow-400',
        ],
        error: [
          'bg-red-200 border-red-500 [&>svg]:text-red-700 [&_[data-slot=alert-button]]:text-red-700',
          'dark:bg-red-950 dark:border-red-900 dark:[&>svg]:text-red-400 dark:[&_[data-slot=alert-button]]:text-red-400',
        ],
      },
    },
    defaultVariants: {
      variant: 'info',
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
        'text-current col-start-2 line-clamp-1 min-h-4',
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
        'text-current col-start-2 grid justify-items-start gap-1 [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  )
}

function AlertButton({ className, ...props }: ComponentProps<'button'>) {
  return (
    <Button
      data-slot="alert-button"
      variant="outline"
      size="sm"
      shape="square"
      className={cn('row-start-1 row-span-2 col-start-3', className)}
      {...props}
    />
  )
}

export { Alert, AlertButton, AlertDescription, AlertTitle }
