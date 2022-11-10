import { forwardRef, Ref, ElementType, ReactNode } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Text } from '~/components/Text'

import { buttonVariants, iconVariants, ButtonVariants } from './styles.css'

type ButtonProps<T extends ElementType> = ButtonVariants &
  Omit<
    BoxProps<T>,
    | 'background'
    | 'children'
    | 'display'
    | 'fontFamily'
    | 'fontSize'
    | 'lineHeight'
    | 'fontWeight'
    | 'size'
    | 'width'
  > & {
    disabled: boolean
    isPending: boolean
    label?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    width: 'full' | 'normal'
  }

export const Button = forwardRef(
  <T extends ElementType>(props: ButtonProps<T>, ref: Ref<T>) => {
    const {
      as = 'button',
      disabled = false,
      isPending = false,
      label,
      leftIcon,
      rightIcon,
      size = 'md',
      variant = 'solid',
      width = 'normal',
      ...boxProps
    } = props

    return (
      <Box
        as={as}
        className={buttonVariants({ size, variant, width })}
        disabled={disabled || isPending}
        ref={ref}
        {...boxProps}
      >
        <Box
          as="span"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={width === 'normal' && rightIcon ? 'xtight' : undefined}
        >
          <Box
            as="span"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={leftIcon ? 'xtight' : undefined}
          >
            {leftIcon && (
              <Box as="span" className={iconVariants({ size })}>
                {leftIcon}
              </Box>
            )}

            <Text>{label}</Text>
          </Box>

          {rightIcon && (
            <Box as="span" className={iconVariants({ size })}>
              {rightIcon}
            </Box>
          )}
        </Box>
      </Box>
    )
  }
)
