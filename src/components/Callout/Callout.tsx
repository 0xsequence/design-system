import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps, type ReactNode } from 'react'
import {
  CheckmarkIcon,
  CloseIcon,
  InfoIcon,
  WarningIcon,
} from 'src/icons/index.js'
import type { IconProps } from 'src/icons/types.js'
import { cn } from 'src/utils/classnames.js'

import { Button } from '../Button/Button.js'
import { textVariants } from '../Text/Text.js'

const calloutVariants = cva(
  [
    textVariants({ variant: 'normal' }),
    'text-primary relative w-full rounded-lg border-1 overflow-hidden bg-(--callout-header) border-(--callout-header)',
  ],
  {
    variants: {
      variant: {
        info: [
          '[--callout-header:var(--color-indigo-500)] dark:[--callout-header:var(--color-indigo-900)]',
          '[--callout-content:var(--color-indigo-200)] dark:[--callout-content:var(--color-indigo-950)]',
          '[--callout-accent:var(--color-indigo-700)] dark:[--callout-accent:var(--color-indigo-400)]',
        ],
        success: [
          '[--callout-header:var(--color-green-500)] dark:[--callout-header:var(--color-green-900)]',
          '[--callout-content:var(--color-green-200)] dark:[--callout-content:var(--color-green-950)]',
          '[--callout-accent:var(--color-green-700)] dark:[--callout-accent:var(--color-green-400)]',
        ],
        warning: [
          '[--callout-header:var(--color-yellow-500)] dark:[--callout-header:var(--color-yellow-900)]',
          '[--callout-content:var(--color-yellow-100)] dark:[--callout-content:var(--color-yellow-950)]',
          '[--callout-accent:var(--color-yellow-700)] dark:[--callout-accent:var(--color-yellow-400)]',
        ],
        error: [
          '[--callout-header:var(--color-red-500)] dark:[--callout-header:var(--color-red-900)]',
          '[--callout-content:var(--color-red-200)] dark:[--callout-content:var(--color-red-950)]',
          '[--callout-accent:var(--color-red-700)] dark:[--callout-accent:var(--color-red-400)]',
        ],
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

function Callout({
  className,
  variant,
  ...props
}: ComponentProps<'div'> & VariantProps<typeof calloutVariants>) {
  return (
    <div
      data-slot="callout"
      role="alert"
      className={cn(calloutVariants({ variant }), className)}
      {...props}
    />
  )
}

function CalloutHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="callout-header"
      className={cn(
        textVariants({ variant: 'normal-bold' }),
        'bg-(--callout-header) text-white flex items-center justify-between px-4 py-3',
        className
      )}
      {...props}
    />
  )
}

function CalloutContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="callout-content"
      className={cn(
        'bg-(--callout-content) flex flex-col items-start gap-2 sm:items-center sm:flex-row sm:justify-between px-4 py-3',
        className
      )}
      {...props}
    />
  )
}

function CalloutButton({ className, ...props }: ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="callout-button"
      variant="outline"
      size="sm"
      shape="circle"
      className={cn(className, 'text-(--callout-accent)')}
      {...props}
    />
  )
}

function CalloutIcon({
  variant,
  size = 'xs',
  ...props
}: IconProps & { variant: VariantProps<typeof calloutVariants>['variant'] }) {
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

function CalloutHelper({
  variant,
  title,
  children,
  onClose,
  ...props
}: Omit<ComponentProps<typeof Callout>, 'title'> & {
  title: ReactNode
  onClose?: () => void
}) {
  return (
    <Callout variant={variant} {...props}>
      <CalloutHeader>
        <div className="line-clamp-1 min-h-4 flex items-center gap-2">
          <CalloutIcon variant={variant} />
          {title}
        </div>
        <Button
          variant="text"
          size="xs"
          shape="square"
          iconOnly
          onClick={onClose}
          className="text-white"
        >
          <CloseIcon />
        </Button>
      </CalloutHeader>
      {children && <CalloutContent>{children}</CalloutContent>}
    </Callout>
  )
}

Callout.Helper = CalloutHelper

export { Callout, CalloutButton, CalloutContent, CalloutHeader, CalloutIcon }
