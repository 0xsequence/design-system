import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, type ReactNode } from 'react'
import { CheckmarkIcon, InfoIcon, WarningIcon } from 'src/icons/index.js'
import type { IconProps } from 'src/icons/types.js'
import { cn } from 'src/utils/classnames.js'

import { Button } from '../Button/Button.js'
import { textVariants } from '../Text/Text.js'

const alertVariants = cva(
  [
    textVariants({ variant: 'normal' }),
    'text-primary relative w-full rounded-lg border-1 border-(--alert-border) bg-(--alert-background) p-4 grid gap-y-2 items-center grid-cols-[auto_1fr_auto]',
    '[&>svg]:mr-2 [&>svg]:text-(--alert-accent) [&_[data-slot=alert-button]]:text-(--alert-accent)',
  ],
  {
    variants: {
      variant: {
        info: [
          '[--alert-background:var(--color-indigo-200)] dark:[--alert-background:var(--color-indigo-950)]',
          '[--alert-border:var(--color-indigo-500)] dark:[--alert-border:var(--color-indigo-900)]',
          '[--alert-accent:var(--color-indigo-700)] dark:[--alert-accent:var(--color-indigo-400)]',
        ],
        success: [
          '[--alert-background:var(--color-green-200)] dark:[--alert-background:var(--color-green-950)]',
          '[--alert-border:var(--color-green-500)] dark:[--alert-border:var(--color-green-900)]',
          '[--alert-accent:var(--color-green-700)] dark:[--alert-accent:var(--color-green-400)]',
        ],
        warning: [
          '[--alert-background:var(--color-yellow-100)] dark:[--alert-background:var(--color-yellow-950)]',
          '[--alert-border:var(--color-yellow-500)] dark:[--alert-border:var(--color-yellow-900)]',
          '[--alert-accent:var(--color-yellow-700)] dark:[--alert-accent:var(--color-yellow-400)]',
        ],
        error: [
          '[--alert-background:var(--color-red-200)] dark:[--alert-background:var(--color-red-950)]',
          '[--alert-border:var(--color-red-500)] dark:[--alert-border:var(--color-red-900)]',
          '[--alert-accent:var(--color-red-700)] dark:[--alert-accent:var(--color-red-400)]',
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
        'text-(--alert-accent) col-start-2 col-end-4 line-clamp-1 min-h-4 sm:col-end-3',
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
        'text-current col-start-2 col-end-4 grid justify-items-start gap-1 sm:col-end-3',
        className
      )}
      {...props}
    />
  )
}

function AlertButton({ className, ...props }: ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="alert-button"
      variant="outline"
      size="sm"
      shape="square"
      className={cn(
        'row-start-3 col-start-3 mt-2 sm:mt-0 sm:row-start-1 sm:row-end-3 sm:col-start-3',
        className
      )}
      {...props}
    />
  )
}

function AlertIcon({
  variant,
  size = 'sm',
  ...props
}: IconProps & { variant: VariantProps<typeof alertVariants>['variant'] }) {
  switch (variant) {
    case 'info':
      return <InfoIcon size={size} {...props} />
    case 'success':
      return <CheckmarkIcon size={size} {...props} />
    case 'warning':
    case 'error':
      return <WarningIcon size={size} {...props} />
    default:
      return null
  }
}

function AlertHelper({
  variant,
  title,
  description,
  children,
  ...props
}: ComponentProps<typeof Alert> & {
  title: ReactNode
  description?: ReactNode
}) {
  return (
    <Alert variant={variant} {...props}>
      <AlertIcon variant={variant} />
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
      {children}
    </Alert>
  )
}

Alert.Helper = AlertHelper

export { Alert, AlertButton, AlertDescription, AlertIcon, AlertTitle }
