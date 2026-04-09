import { cva, type VariantProps } from 'class-variance-authority'
import { CircleCheckIcon, CircleXIcon, InfoIcon, TriangleAlertIcon, type LucideProps } from 'lucide-react'
import { type ComponentProps, type ReactNode } from 'react'
import { cn } from 'src/utils/classnames.js'

import { Button } from '../Button/Button.js'

const alertVariants = cva(
  [
    'text-sm text-(--alert-accent) relative w-full rounded-3xl border border-(--alert-border) bg-(--alert-background) p-4 md:p-6 grid gap-y-2 items-center grid-cols-[auto_1fr_auto]',
    '[&>svg]:mr-3 [&>svg]:text-(--alert-accent) [&>svg]:self-center [&_[data-slot=alert-button]]:text-(--alert-accent)',
  ],
  {
    variants: {
      variant: {
        info: [
          '[--alert-background:var(--color-purple-50)] dark:[--alert-background:var(--color-purple-950)]',
          '[--alert-border:var(--color-purple-100)] dark:[--alert-border:var(--color-purple-900)]',
          '[--alert-accent:var(--color-purple-800)] dark:[--alert-accent:var(--color-purple-400)]',
        ],
        success: [
          '[--alert-background:var(--color-emerald-50)] dark:[--alert-background:var(--color-emerald-950)]',
          '[--alert-border:var(--color-emerald-100)] dark:[--alert-border:var(--color-emerald-900)]',
          '[--alert-accent:var(--color-emerald-800)] dark:[--alert-accent:var(--color-emerald-400)]',
        ],
        warning: [
          '[--alert-background:var(--color-orange-50)] dark:[--alert-background:var(--color-orange-950)]',
          '[--alert-border:var(--color-orange-100)] dark:[--alert-border:var(--color-orange-900)]',
          '[--alert-accent:var(--color-amber-800)] dark:[--alert-accent:var(--color-amber-400)]',
        ],
        error: [
          '[--alert-background:var(--color-red-50)] dark:[--alert-background:var(--color-red-950)]',
          '[--alert-border:var(--color-red-100)] dark:[--alert-border:var(--color-red-900)]',
          '[--alert-accent:var(--color-red-800)] dark:[--alert-accent:var(--color-red-400)]',
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
        'text-lg md:text-2xl font-bold text-primary',
        'text-black dark:text-white col-start-2 col-end-4 min-h-4 sm:col-end-3',
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
        'text-xs md:text-sm font-medium',
        'text-(--alert-accent) col-start-2 col-end-4 grid justify-items-start gap-1 sm:col-end-3',
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
  className,
  ...props
}: LucideProps & { variant: VariantProps<typeof alertVariants>['variant'] }) {
  className = cn("size-4 md:size-5", className)
  
  switch (variant) {
    case 'info':
      return <InfoIcon className={className} {...props} />
    case 'success':
      return <CircleCheckIcon className={className} {...props} />
    case 'warning':
      return <TriangleAlertIcon className={className} {...props} />
    case 'error':
      return <CircleXIcon className={className} {...props} />
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
}: Omit<ComponentProps<typeof Alert>, 'title'> & {
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
