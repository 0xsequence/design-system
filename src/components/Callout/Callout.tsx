import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'
import {
  CheckmarkIcon,
  CloseIcon,
  InfoIcon,
  WarningIcon,
} from 'src/icons/index.js'
import { cn } from 'src/utils/classnames.js'

import { Button } from '../Button/Button.js'
import { textVariants } from '../Text/Text.js'

const alertVariants = cva(
  [
    textVariants({ variant: 'normal' }),
    'text-primary relative w-full rounded-lg border-1 overflow-hidden bg-[var(--callout-header)] border-[var(--callout-header)]',
  ],
  {
    variants: {
      variant: {
        info: [
          '[--callout-header:var(--color-indigo-500)] dark:[--callout-header:var(--color-indigo-900)]',
          '[--callout-content:var(--color-indigo-200)] dark:[--callout-content:var(--color-indigo-950)]',
          '[--callout-button:var(--color-indigo-700)] dark:[--callout-button:var(--color-indigo-400)]',
        ],
        success: [
          '[--callout-header:var(--color-green-500)] dark:[--callout-header:var(--color-green-900)]',
          '[--callout-content:var(--color-green-200)] dark:[--callout-content:var(--color-green-950)]',
          '[--callout-button:var(--color-green-700)] dark:[--callout-button:var(--color-green-400)]',
        ],
        warning: [
          '[--callout-header:var(--color-yellow-500)] dark:[--callout-header:var(--color-yellow-900)]',
          '[--callout-content:var(--color-yellow-100)] dark:[--callout-content:var(--color-yellow-950)]',
          '[--callout-button:var(--color-yellow-700)] dark:[--callout-button:var(--color-yellow-400)]',
        ],
        error: [
          '[--callout-header:var(--color-red-500)] dark:[--callout-header:var(--color-red-900)]',
          '[--callout-content:var(--color-red-200)] dark:[--callout-content:var(--color-red-950)]',
          '[--callout-button:var(--color-red-700)] dark:[--callout-button:var(--color-red-400)]',
        ],
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

const getVariantIcon = (
  variant: VariantProps<typeof alertVariants>['variant']
) => {
  switch (variant) {
    case 'info':
      return InfoIcon
    case 'success':
      return CheckmarkIcon
    case 'warning':
    case 'error':
      return WarningIcon
  }

  return null
}

function Callout({
  className,
  variant,
  title,
  children,
  onClose,
  ...props
}: ComponentProps<'div'> &
  VariantProps<typeof alertVariants> & {
    title: string
    onClose?: () => void
  }) {
  const Icon = getVariantIcon(variant)
  return (
    <div
      data-slot="callout"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <div
        data-slot="callout-header"
        className="bg-[var(--callout-header)] flex items-center justify-between px-4 py-3"
      >
        <div
          className={cn(
            textVariants({ variant: 'normal-bold' }),
            'text-white dark:text-primary line-clamp-1 min-h-4 flex items-center gap-2'
          )}
        >
          {Icon && <Icon size="xs" />}
          {title}
        </div>
        <Button
          variant="ghost"
          size="xs"
          shape="square"
          iconOnly
          onClick={onClose}
          className="text-white dark:text-primary"
        >
          <CloseIcon />
        </Button>
      </div>
      {children && (
        <div
          data-slot="callout-content"
          className="bg-[var(--callout-content)] flex flex-col items-start gap-2 sm:items-center sm:flex-row sm:justify-between px-4 py-3"
        >
          {children}
        </div>
      )}
    </div>
  )
}

function CalloutButton({ className, ...props }: ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="callout-button"
      variant="outline"
      size="sm"
      shape="circle"
      className={cn(className, 'text-[var(--callout-button)]')}
      {...props}
    />
  )
}

export { Callout, CalloutButton }
