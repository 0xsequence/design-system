import { Slot, Slottable } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import {
  type ComponentProps,
  type ComponentType,
  type ReactNode,
  type Ref,
} from 'react'

import type { IconProps } from '../../icons/types.js'
import { cn } from '../../utils/classnames.js'
import { Text } from '../Text/Text.js'

import { buttonVariants } from './Button.js'

type ButtonPresetProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    pending?: boolean
    label?: ReactNode
    ref?: Ref<HTMLButtonElement>
    leftIcon?: ComponentType<IconProps>
    rightIcon?: ComponentType<IconProps>
  }

export const ButtonPreset = (props: ButtonPresetProps) => {
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
            <Text>{label}</Text>
          </div>

          {RightIcon && <RightIcon size={iconSize} />}
        </div>
      )}
    </Component>
  )
}
