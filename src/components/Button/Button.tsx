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
      disabled = false,
      pending = false,
      label,
      LeftIcon,
      RightIcon,
      size = 'md',
      variant = 'solid',
      width = 'normal',
      ...boxProps
    } = props

    return (
      <Box
        as={as}
        className={buttonVariants({ size, variant, width })}
        disabled={disabled || pending}
        ref={ref}
        {...boxProps}
      >
        <Box
          as="span"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={
            width === 'normal' && RightIcon
              ? size === 'tab'
                ? 'xxtight'
                : 'xtight'
              : undefined
          }
        >
          <Box
            as="span"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={LeftIcon ? (size === 'tab' ? 'xxtight' : 'xtight') : undefined}
          >
            {LeftIcon && <LeftIcon className={iconVariants({ size })} />}

            <Text>{label}</Text>
          </Box>

          {RightIcon && <RightIcon className={iconVariants({ size })} />}
        </Box>
      </Box>
    )
  }
)
