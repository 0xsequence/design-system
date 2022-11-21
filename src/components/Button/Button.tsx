import { clsx } from 'clsx'
import { forwardRef, ElementType, ComponentType } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Text } from '~/components/Text'
import { IconProps } from '~/icons/types'

import { buttonVariants, iconVariants, ButtonVariants } from './styles.css'

type ButtonProps = ButtonVariants & {
  disabled?: boolean
  pending?: boolean
  label?: string
  width?: 'full' | 'normal'
  LeftIcon?: ComponentType<IconProps>
  RightIcon?: ComponentType<IconProps>
}

export const Button: PolymorphicComponent<ButtonProps, 'button'> = forwardRef(
  <T extends ElementType>(
    props: PolymorphicProps<ButtonProps, T>,
    ref: PolymorphicRef<T>
  ) => {
    const {
      as = 'button',
      className,
      disabled = false,
      pending = false,
      label,
      LeftIcon,
      RightIcon,
      size = 'md',
      variant = 'glass',
      width = 'normal',
      ...boxProps
    } = props

    const iconOnly = LeftIcon !== undefined && label === undefined
    const clickable = !disabled && !pending

    return (
      <Box
        as={as}
        className={clsx(
          className,
          buttonVariants({
            clickable,
            disabled: disabled || pending,
            iconOnly,
            size: variant === 'text' ? undefined : size,
            variant,
            width,
          })
        )}
        disabled={disabled || pending}
        ref={ref}
        {...boxProps}
      >
        <Box
          as="span"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={size === 'xs' ? '1' : '2'}
        >
          <Box
            as="span"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={size === 'xs' ? '1' : '2'}
          >
            {LeftIcon && <LeftIcon className={iconVariants({ size })} />}
            {!iconOnly && <Text>{label}</Text>}
          </Box>

          {RightIcon && <RightIcon className={iconVariants({ size })} />}
        </Box>
      </Box>
    )
  }
)
