import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentType, forwardRef, ReactNode } from 'react'

import { Text, textVariants } from '~/components/Text'
import { IconProps } from '~/icons/types'
import { cn } from '~/utils'

export const buttonVariants = cva(
  [
    'inline-flex items-center whitespace-nowrap overflow-hidden border-none text-decoration-none',
    'outline-none ring-inset focus-visible:ring-2 focus-visible:ring-border-focus',
  ],
  {
    variants: {
      variant: {
        base: 'bg-transparent text-text-100',
        ghost: 'bg-transparent text-text-100',
        feature: [
          'bg-gradient-secondary text-white',
          'outline outline-2 outline-white/10 -outline-offset-2',
        ],
        primary: 'bg-gradient-primary text-white',
        glass: 'bg-button-glass text-text-100',
        emphasis: 'bg-button-emphasis text-text-100',
        raised: 'bg-background-raised text-text-100',
        danger: 'bg-negative text-white',
        text: [
          'bg-transparent text-text-50 rounded-xs outline-offset-1',
          textVariants({ variant: 'small' }),
          'font-bold',
        ],
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-sm',
      },
      size: {
        xs: [textVariants({ variant: 'xsmall' }), 'h-7 px-3 font-bold'],
        sm: [textVariants({ variant: 'normal' }), 'h-9 px-4 font-bold'],
        md: [textVariants({ variant: 'normal' }), 'h-11 px-5 font-bold'],
        lg: [textVariants({ variant: 'normal' }), 'h-[52px] px-5 font-bold'],
      },
      disabled: {
        true: 'cursor-default opacity-50',
        false: 'cursor-pointer hover:opacity-80',
      },
      iconOnly: {
        true: 'p-0 flex flex-shrink-0 items-center justify-center',
      },
      hasLeftIcon: {
        true: '',
      },
      hasRightIcon: {
        true: '',
      },
      activeOutline: {
        light:
          'outline outline-2 outline-background-secondary -outline-offset-2',
        bold: 'outline outline-2 outline-border-normal -outline-offset-2',
      },
    },
    compoundVariants: [
      {
        iconOnly: true,
        size: 'xs',
        className: 'w-7',
      },
      {
        iconOnly: true,
        size: 'sm',
        className: 'w-9',
      },
      {
        iconOnly: true,
        size: 'md',
        className: 'w-11',
      },
      {
        iconOnly: true,
        size: 'lg',
        className: 'w-13',
      },
      {
        iconOnly: false,
        hasLeftIcon: true,
        size: 'xs',
        className: 'pl-2',
      },
      {
        iconOnly: false,
        hasLeftIcon: true,
        size: 'sm',
        className: 'pl-2',
      },
      {
        iconOnly: false,
        hasLeftIcon: true,
        size: 'md',
        className: 'pl-4',
      },
      {
        iconOnly: false,
        hasRightIcon: true,
        size: 'xs',
        className: 'pr-2',
      },
      {
        iconOnly: false,
        hasRightIcon: true,
        size: 'sm',
        className: 'pr-2',
      },
      {
        iconOnly: false,
        hasRightIcon: true,
        size: 'md',
        className: 'pr-4',
      },
    ],
    defaultVariants: {
      variant: 'glass',
      size: 'md',
      shape: 'circle',
    },
  }
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disabled?: boolean
  pending?: boolean
  label?: ReactNode
  leftIcon?: ComponentType<IconProps>
  rightIcon?: ComponentType<IconProps>
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      asChild,
      className,
      disabled = false,
      pending = false,
      label,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      size = 'md',
      variant = 'glass',
      shape = 'circle',
      activeOutline,
      type = 'button',
      children,
      ...rest
    } = props

    const hasLeftIcon = LeftIcon !== undefined && label !== undefined
    const hasRightIcon = RightIcon !== undefined && label !== undefined
    const iconOnly = LeftIcon !== undefined && label === undefined

    const iconSize = size === 'xs' ? 'xs' : 'sm'
    const gap = size === 'xs' ? 'gap-1' : 'gap-2'

    const Component = asChild ? Slot : 'button'

    return (
      <Component
        ref={ref}
        className={cn(
          buttonVariants({
            activeOutline,
            disabled: disabled || pending,
            hasLeftIcon,
            hasRightIcon,
            iconOnly,
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
            className={cn(
              'w-full h-full flex items-center justify-between',
              gap
            )}
          >
            <div className={cn('flex items-center justify-start', gap)}>
              {LeftIcon && <LeftIcon size={iconSize} />}
              <Text>{label}</Text>
            </div>

            {RightIcon && <RightIcon size={iconSize} />}
          </div>
        )}
      </Component>
    )
  }
)
