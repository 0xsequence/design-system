import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ComponentType, type ReactNode } from 'react'

import { Text, textVariants } from '~/components/Text/Text.js'
import type { IconProps } from '~/icons/types.js'
import { focusRingVariants } from '~/styles.js'
import { cn } from '~/utils/classnames.js'

export const buttonVariants = cva(
  [
    'inline-flex items-center whitespace-nowrap overflow-hidden text-decoration-none',
    focusRingVariants(),
  ],
  {
    variants: {
      variant: {
        base: 'bg-transparent text-primary',
        ghost: 'bg-transparent hover:bg-button-glass text-primary',
        feature: [
          'bg-gradient-secondary text-white',
          'ring-inset ring-2 ring-white/10',
        ],
        primary: 'bg-gradient-primary text-white hover:opacity-80',
        secondary:
          'bg-background-secondary text-primary ring-inset ring-1 ring-border-button hover:ring-border-hover hover:bg-background-hover',
        glass:
          'bg-button-glass text-primary ring-inset ring-1 ring-border-button hover:ring-border-hover hover:bg-background-hover',
        emphasis: 'bg-button-emphasis text-primary',
        raised: 'bg-background-raised text-primary',
        danger: 'bg-negative text-white',
        text: [
          'bg-transparent text-muted rounded-xs outline-offset-1',
          textVariants({ variant: 'small' }),
          'font-bold',
        ],
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-lg',
      },
      size: {
        xs: [
          textVariants({ variant: 'xsmall', fontWeight: 'bold' }),
          'h-7 px-3',
        ],
        sm: [
          textVariants({ variant: 'normal', fontWeight: 'bold' }),
          'h-9 px-4',
        ],
        md: [
          textVariants({ variant: 'normal', fontWeight: 'bold' }),
          'h-11 px-5',
        ],
        lg: [
          textVariants({ variant: 'normal', fontWeight: 'bold' }),
          'h-[52px] px-5',
        ],
      },
      disabled: {
        true: 'cursor-default opacity-50',
        false: 'cursor-pointer',
      },
      iconOnly: {
        true: 'p-0 flex shrink-0 items-center justify-center',
      },
      hasLeftIcon: {
        true: '',
      },
      hasRightIcon: {
        true: '',
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
      variant: 'secondary',
    },
  }
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    Omit<
      VariantProps<typeof buttonVariants>,
      'iconOnly' | 'hasLeftIcon' | 'hasRightIcon'
    > {
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
      variant = 'secondary',
      shape = 'circle',
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
