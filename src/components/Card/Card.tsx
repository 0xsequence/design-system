import { mergeProps, useRender } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentProps } from 'react'

import { focusRingVariants } from '../../styles.js'
import { cn } from '../../utils/classnames.js'

export const cardVariants = cva(
  ['overflow-hidden', 'rounded-3xl', 'p-6', 'w-full'],
  {
    variants: {
      variant: {
        default: 'bg-background-secondary border-1 border-border-card',
        outline: 'bg-transparent border-1 border-border-card',
        muted: 'bg-background-muted border-1 border-border-card',
      },
      clickable: {
        true: [
          'cursor-pointer hover:border-transparent hover:ring-2 hover:ring-border-hover',
          focusRingVariants(),
        ],
      },
      disabled: {
        true: 'opacity-50 cursor-default pointer-events-none hover:border-border-card',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const Card = ({
  className,
  variant,
  clickable,
  disabled,
  render,
  ...rest
}: useRender.ComponentProps<'div'> & VariantProps<typeof cardVariants>) => {
  return useRender({
    defaultTagName: 'div',
    props: mergeProps<'div'>(
      {
        className: cn(
          cardVariants({ variant, clickable, disabled }),
          className
        ),
      },
      rest
    ),
    render,
    state: {
      slot: 'card',
      variant,
      clickable,
      disabled,
    },
  })
}

export const CardHeader = ({
  ref,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn('flex flex-col gap-1.5 relative', className)}
    {...props}
  />
)

export const CardTitle = ({
  ref,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-title"
    className={cn('text-lg font-bold leading-none', className)}
    {...props}
  />
)

export const CardDescription = ({
  ref,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-description"
    className={cn('text-sm text-muted', className)}
    {...props}
  />
)

export const CardAction = ({
  ref,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-action"
    className={cn('absolute top-0 right-0', className)}
    {...props}
  />
)

export const CardContent = ({
  ref,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn('pt-3', className)}
    {...props}
  />
)

export const CardFooter = ({
  ref,
  className,
  ...props
}: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn(
      'flex items-center pt-3 border-t border-border-card',
      className
    )}
    {...props}
  />
)
