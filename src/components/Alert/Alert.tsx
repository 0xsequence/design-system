import { cva, type VariantProps } from 'class-variance-authority'
import {
  CircleCheckIcon,
  CircleXIcon,
  InfoIcon,
  type LucideProps,
  TriangleAlertIcon,
} from 'lucide-react'
import {
  type ComponentProps,
  createContext,
  type ReactNode,
  useContext,
} from 'react'

import { cn } from '../../utils/classnames.js'
import { Button } from '../Button/Button.js'

type AlertSize = 'responsive' | 'sm' | 'lg'

const AlertSizeContext = createContext<AlertSize>('responsive')

function useAlertSize() {
  return useContext(AlertSizeContext)
}

function alertPaddingClasses(size: AlertSize) {
  if (size === 'sm') {
    return 'p-4'
  }
  if (size === 'lg') {
    return 'p-6'
  }
  return 'p-4 @md/alert:p-6'
}

function alertRadiusClasses(size: AlertSize) {
  if (size === 'sm') {
    return 'rounded-2xl'
  }
  if (size === 'lg') {
    return 'rounded-3xl'
  }
  return 'rounded-2xl @md/alert:rounded-3xl'
}

function alertTitleClasses(size: AlertSize) {
  return cn(
    'font-bold text-primary text-black dark:text-white col-start-2 min-h-4',
    size === 'sm' && 'text-lg col-end-4',
    size === 'lg' && 'text-2xl col-end-3',
    size === 'responsive' &&
      'text-lg @md/alert:text-2xl col-end-4 @sm/alert:col-end-3'
  )
}

function alertDescriptionClasses(size: AlertSize) {
  return cn(
    'font-medium [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:opacity-80',
    'text-(--alert-accent) col-start-2 justify-items-start gap-1',
    size === 'sm' && 'text-xs col-end-4',
    size === 'lg' && 'text-sm col-end-3',
    size === 'responsive' &&
      'text-xs @md/alert:text-sm col-end-4 @sm/alert:col-end-3'
  )
}

function alertButtonClasses(size: AlertSize) {
  return cn(
    'row-start-3 col-start-3',
    size === 'sm' && 'mt-2',
    size === 'lg' && 'mt-0 row-start-1 row-end-3',
    size === 'responsive' &&
      'mt-2 @sm/alert:mt-0 @sm/alert:row-start-1 @sm/alert:row-end-3 @sm/alert:col-start-3'
  )
}

function alertIconClasses(size: AlertSize) {
  if (size === 'sm') {
    return 'size-4'
  }
  if (size === 'lg') {
    return 'size-5'
  }
  return 'size-4 @md/alert:size-5'
}

const alertVariants = cva(
  [
    'text-sm text-(--alert-accent) relative w-full border border-(--alert-border) bg-(--alert-background) grid gap-y-2 items-center grid-cols-[auto_1fr_auto]',
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
      size: {
        responsive: '',
        sm: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'responsive',
    },
  }
)

function Alert({
  className,
  variant,
  size = 'responsive',
  children,
  ...props
}: ComponentProps<'div'> &
  VariantProps<typeof alertVariants> & { size?: AlertSize }) {
  return (
    <AlertSizeContext.Provider value={size}>
      <div className={cn('@container/alert w-full', className)}>
        <div
          data-slot="alert"
          data-size={size === 'responsive' ? undefined : size}
          role="alert"
          className={cn(
            alertVariants({ variant, size }),
            alertPaddingClasses(size),
            alertRadiusClasses(size)
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    </AlertSizeContext.Provider>
  )
}

function AlertTitle({ className, ...props }: ComponentProps<'div'>) {
  const size = useAlertSize()

  return (
    <div
      data-slot="alert-title"
      className={cn(alertTitleClasses(size), className)}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: ComponentProps<'div'>) {
  const size = useAlertSize()

  return (
    <div
      data-slot="alert-description"
      className={cn(alertDescriptionClasses(size), className)}
      {...props}
    />
  )
}

function AlertButton({ className, ...props }: ComponentProps<typeof Button>) {
  const size = useAlertSize()

  return (
    <Button
      data-slot="alert-button"
      variant="outline"
      size="sm"
      className={cn(alertButtonClasses(size), className)}
      {...props}
    />
  )
}

function AlertIcon({
  variant,
  className,
  ...props
}: LucideProps & { variant: VariantProps<typeof alertVariants>['variant'] }) {
  const size = useAlertSize()
  className = cn(alertIconClasses(size), className)

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
  size,
  title,
  description,
  children,
  ...props
}: Omit<ComponentProps<typeof Alert>, 'title'> & {
  title: ReactNode
  description?: ReactNode
}) {
  return (
    <Alert variant={variant} size={size} {...props}>
      <AlertIcon variant={variant} />
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
      {children}
    </Alert>
  )
}

Alert.Helper = AlertHelper

export { Alert, AlertButton, AlertDescription, AlertIcon, AlertTitle }
