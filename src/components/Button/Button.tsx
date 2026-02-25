import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ComponentType, type ReactNode } from 'react'
import type { IconProps } from 'src/icons/types.js'
import { focusRingVariants } from 'src/styles.js'
import { cn } from 'src/utils/classnames.js'

import { textVariants } from '../Text/Text.js'

const buttonVariants = cva(
  [
    'inline-flex items-center gap-2 whitespace-nowrap overflow-hidden text-decoration-none cursor-pointer',
    'disalbed:cursor-default disabled:pointer-events-none disabled:opacity-50',

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
        ghost:
          'bg-transparent text-primary/80 hover:bg-background-inverse/15 hover:text-primary',
        emphasis:
          'bg-background-inverse text-background-primary hover:bg-primary/80',
        destructive: 'bg-destructive text-white hover:bg-destructive/80',
        text: [
          'bg-transparent text-primary rounded-xs h-auto w-auto h-auto min-w-0 p-0 focus-visible:outline-offset-1 grow-0 hover:opacity-80',
        ],
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
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, shape, iconOnly }),
        className
      )}
      {...props}
    />
  )
}

type ButtonHelperProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    label?: ReactNode
    leftIcon?: ComponentType<IconProps>
    rightIcon?: ComponentType<IconProps>
  }

const ButtonHelper = (props: ButtonHelperProps) => {
  const {
    ref,
    className,
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

  return (
    <ButtonPrimitive
      ref={ref}
      className={cn(
        buttonVariants({
          size: variant === 'text' ? undefined : size,
          shape: variant === 'text' ? undefined : shape,
          variant,
        }),
        className
      )}
      type={type}
      {...rest}
    >
      {children}
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
    </ButtonPrimitive>
  )
}

Button.Helper = ButtonHelper

export { Button, buttonVariants }
