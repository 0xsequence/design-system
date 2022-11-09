import { forwardRef, Ref, ElementType, ReactNode } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Text } from '~/components/Text'

import * as styles from './styles.css'

type ButtonProps<T extends ElementType> = styles.Variants &
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
        className={styles.variants({ size, variant, width })}
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
            <Box as="span" className={styles.icon}>
              {leftIcon}
            </Box>

            <Text>{label}</Text>
          </Box>

          <Box as="span" className={styles.icon}>
            {rightIcon}
          </Box>
        </Box>
      </Box>
    )
  }
)
