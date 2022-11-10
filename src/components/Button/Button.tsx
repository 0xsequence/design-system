import { forwardRef, Ref, ElementType, ComponentType } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Text } from '~/components/Text'
import { IconProps } from '~/icons/types'

import { buttonVariants, iconVariants, ButtonVariants } from './styles.css'

type ButtonProps<T extends ElementType> = BoxProps<T> &
  ButtonVariants & {
    disabled: boolean
    pending: boolean
    label?: string
    width: 'full' | 'normal'
    LeftIcon?: ComponentType<IconProps>
    RightIcon?: ComponentType<IconProps>
  }

export const Button = forwardRef(
  <T extends ElementType>(props: ButtonProps<T>, ref: Ref<T>) => {
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
          gap={width === 'normal' && RightIcon ? 'xtight' : undefined}
        >
          <Box
            as="span"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={LeftIcon ? 'xtight' : undefined}
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
