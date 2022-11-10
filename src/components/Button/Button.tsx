import {
  forwardRef,
  Ref,
  ElementType,
  ComponentType,
  ReactElement,
} from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Text } from '~/components/Text'
import { IconProps } from '~/icons/types'

import { buttonVariants, iconVariants, ButtonVariants } from './styles.css'

type ButtonProps<T extends ElementType> = BoxProps<T> &
  ButtonVariants & {
    disabled?: boolean
    pending?: boolean
    label?: string
    width?: 'full' | 'normal'
    LeftIcon?: ComponentType<IconProps>
    RightIcon?: ComponentType<IconProps>
  }

export const Button: <T extends ElementType>(
  props: ButtonProps<T>
) => ReactElement | null = forwardRef(
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
      ...rest
    } = props

    return (
      <Box
        as={as}
        className={buttonVariants({ size, variant, width })}
        disabled={disabled || pending}
        ref={ref}
        {...rest}
      >
        <Box
          as="span"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: width === 'normal' && RightIcon ? 'xtight' : undefined,
          }}
        >
          <Box
            as="span"
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: LeftIcon ? 'xtight' : undefined,
            }}
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
