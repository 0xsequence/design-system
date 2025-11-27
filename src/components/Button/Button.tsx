import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentProps, ComponentType, ReactNode } from 'react'
import type { IconProps } from 'src/icons/types.js'
import { focusRingVariants } from 'src/styles.js'
import { cn } from 'src/utils/classnames.js'

import { textVariants } from '../Text/Text.js'

const buttonVariants = cva(
  [
    'inline-flex items-center gap-2 whitespace-nowrap overflow-hidden text-decoration-none cursor-pointer',
    'disabled:cursor-default disabled:opacity-50',

    focusRingVariants(),
  ],
  {
    variants: {
      size: {
        xs: [
          textVariants({ variant: 'xsmall-bold' }),
          'min-w-7 h-7 px-2 gap-1 [&_svg:not([class*="size-"])]:size-4',
        ],
        sm: [
          textVariants({ variant: 'normal-bold' }),
          'min-w-9 h-9 px-3 gap-1 [&_svg:not([class*="size-"])]:size-5',
        ],
        md: [
          textVariants({ variant: 'normal-bold' }),
          'min-w-11 h-11 px-4 [&_svg:not([class*="size-"])]:size-5',
        ],
        lg: [
          textVariants({ variant: 'normal-bold' }),
          'min-w-13 h-13 px-5 [&_svg:not([class*="size-"])]:size-5',
        ],
      },

      shape: {
        circle: 'rounded-full',
        square: 'rounded-lg',
      },

      variant: {
        primary:
          'bg-gradient-primary text-white hover:opacity-80 border-1 border-transparent bg-origin-border',
        secondary:
          'bg-background-secondary text-primary border-1 border-border-button hover:border-border-hover hover:bg-background-hover',
        outline:
          'bg-transparent text-primary border-1 border-current hover:opacity-80',
        ghost: 'bg-transparent hover:bg-primary/15 text-primary transition-all',
        emphasis: 'bg-primary text-background-primary hover:bg-primary/80',
        destructive: 'bg-destructive text-white hover:bg-destructive/80',
        text: [
          'bg-transparent text-primary rounded-xs h-auto w-auto h-auto min-w-0 p-0 focus-visible:outline-offset-1 grow-0 hover:opacity-80',
        ],
      },

      disabled: {
        true: 'cursor-default opacity-50',
        false: 'cursor-pointer',
      },
      iconOnly: {
        true: 'p-0 shrink-0 items-center justify-center',
      },
    },

    defaultVariants: {
      variant: 'secondary',
      shape: 'circle',
      size: 'md',
    },
  }
)

function Button({
  className,
  variant,
  size,
  shape,
  iconOnly,
  disabled,
  asChild = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, shape, iconOnly, disabled }),
        className
      )}
      disabled={disabled}
      {...props}
    />
  )
}

type ButtonHelperProps = ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    pending?: boolean
    label?: ReactNode
    leftIcon?: ComponentType<IconProps>
    rightIcon?: ComponentType<IconProps>
  }

const ButtonHelper = (props: ButtonHelperProps) => {
  const {
    ref,
    asChild,
    className,
    disabled = false,
    pending = false,
    label,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    size = 'md',
    variant = 'secondary',
    shape = 'circle',
    type = 'button',
    children,
    ...rest
  } = props

  const iconOnly = LeftIcon !== undefined && label === undefined

  const iconSize = size === 'xs' ? 'xs' : 'sm'
  const gap = size === 'xs' ? 'gap-1' : 'gap-2'

  const Component = asChild ? Slot : 'button'

  return (
    <Component
      ref={ref}
      className={cn(
        buttonVariants({
          disabled: disabled || pending,
          size: variant === 'text' ? undefined : size,
          shape: variant === 'text' ? undefined : shape,
          variant,
        }),
        className
      )}
      disabled={disabled || pending}
      type={type}
      {...rest}
    >
      <Slottable>{children}</Slottable>

      {iconOnly ? (
        <LeftIcon size={iconSize} />
      ) : (
        <div
          className={cn('w-full h-full flex items-center justify-between', gap)}
        >
          <div className={cn('flex items-center justify-start', gap)}>
            {LeftIcon && <LeftIcon size={iconSize} />}
            {label}
          </div>

          {RightIcon && <RightIcon size={iconSize} />}
        </div>
      )}
    </Component>
  )
}

Button.Helper = ButtonHelper

export { Button, buttonVariants }
