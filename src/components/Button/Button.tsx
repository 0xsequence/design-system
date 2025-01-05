import { clsx } from 'clsx'
import { ComponentType, forwardRef, ElementType, ReactNode } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Text } from '~/components/Text'
import { IconProps } from '~/icons/types'

import { buttonVariants, ButtonVariants } from './styles.css'

type ButtonProps = ButtonVariants & {
  disabled?: boolean
  pending?: boolean
  label?: ReactNode
  leftIcon?: ComponentType<IconProps>
  rightIcon?: ComponentType<IconProps>
  type?: 'button' | 'submit' | 'reset'
}

export const Button: PolymorphicComponent<ButtonProps, 'button'> = forwardRef(
  <T extends ElementType>(
    props: PolymorphicProps<ButtonProps, T>,
    ref: PolymorphicRef<T>
  ) => {
    const {
      as = 'button',
      activeOutline,
      className,
      disabled = false,
      display = 'inline-flex',
      fontWeight = 'bold',
      pending = false,
      label,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      size = 'md',
      variant = 'glass',
      width = 'fit',
      shape = 'circle',
      type = 'button',
      ...restProps
    } = props

    const hasLeftIcon = LeftIcon !== undefined && label !== undefined
    const hasRightIcon = RightIcon !== undefined && label !== undefined
    const iconOnly = LeftIcon !== undefined && label === undefined

    const iconSize = size === 'xs' ? 'xs' : 'sm'

    const gap = size === 'xs' ? '1' : '2'

    return (
      <Box
        as={as}
        className={clsx(
          className,
          buttonVariants({
            activeOutline,
            disabled: disabled || pending,
            hasLeftIcon,
            hasRightIcon,
            iconOnly,
            size: variant === 'text' ? undefined : size,
            shape: variant === 'text' ? undefined : shape,
            variant,
          })
        )}
        disabled={disabled || pending}
        display={display}
        fontWeight={fontWeight}
        ref={ref}
        type={type}
        width={width}
        {...restProps}
      >
        {iconOnly ? (
          <LeftIcon size={iconSize} />
        ) : (
          <Box
            width="full"
            height="full"
            justifyContent="space-between"
            alignItems="center"
            gap={gap}
          >
            <Box justifyContent="flex-start" alignItems="center" gap={gap}>
              {LeftIcon && <LeftIcon size={iconSize} />}
              <Text>{label}</Text>
            </Box>

            {RightIcon && <RightIcon size={iconSize} />}
          </Box>
        )}
      </Box>
    )
  }
)
