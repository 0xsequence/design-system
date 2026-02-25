import { cva, type VariantProps } from 'class-variance-authority'
import { cloneElement, isValidElement, type ComponentProps, type ReactElement, type ReactNode } from 'react'

type AnyProps = { className?: string; children?: ReactNode; ref?: unknown; [key: string]: unknown }

import { focusRingVariants } from '../../styles.js'
import { cn } from '../../utils/classnames.js'

export const cardVariants = cva(
  ['overflow-hidden', 'rounded-xl', 'p-4', 'w-full'],
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
      ...rest,
      ...renderProps,
      className: cn(computedClassName, renderProps.className),
      children,
    })
  }

  return (
    <div ref={ref} className={computedClassName} {...rest}>
      {children}
    </div>
  )
}
