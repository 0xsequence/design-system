import { cva, type VariantProps } from 'class-variance-authority';
import { cloneElement, isValidElement, type ComponentProps, type ReactElement, type ReactNode } from 'react';

type AnyProps = { className?: string; children?: ReactNode; ref?: unknown; [key: string]: unknown }

import { focusRingVariants } from '../../styles.js';
import { cn } from '../../utils/classnames.js';

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
        true: ['cursor-pointer hover:opacity-80', focusRingVariants()],
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

interface CardProps
  extends ComponentProps<'div'>,
    VariantProps<typeof cardVariants> {
  render?: ReactElement
}

export const Card = (props: CardProps) => {
  const {
    ref,
    className,
    children,
    variant,
    clickable,
    disabled,
    render,
    ...rest
  } = props

  const computedClassName = cn(
    cardVariants({ variant, clickable, disabled }),
    className
  )

  if (render && isValidElement(render)) {
    const renderProps = render.props as AnyProps
    return cloneElement(render as ReactElement<AnyProps>, {
      ref,
      'data-slot': 'card',
      ...rest,
      ...renderProps,
      className: cn(computedClassName, renderProps.className),
      children,
    })
  }

  return (
    <div ref={ref} data-slot="card" className={computedClassName} {...rest}>
      {children}
    </div>
  )
}

export const CardHeader = ({ ref, className, ...props }: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn('flex flex-col gap-1.5 relative', className)}
    {...props}
  />
)

export const CardTitle = ({ ref, className, ...props }: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-title"
    className={cn('text-lg font-semibold leading-none', className)}
    {...props}
  />
)

export const CardDescription = ({ ref, className, ...props }: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-description"
    className={cn('text-sm text-muted', className)}
    {...props}
  />
)

export const CardAction = ({ ref, className, ...props }: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-action"
    className={cn('absolute top-0 right-0', className)}
    {...props}
  />
)

export const CardContent = ({ ref, className, ...props }: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn('pt-3', className)}
    {...props}
  />
)

export const CardFooter = ({ ref, className, ...props }: ComponentProps<'div'>) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn('flex items-center pt-3 border-t border-border-card', className)}
    {...props}
  />
)
