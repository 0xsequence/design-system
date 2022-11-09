import {
  forwardRef,
  PropsWithChildren,
  Ref,
  ElementType,
  ReactNode,
} from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

type ButtonProps<T extends ElementType> = styles.Variants &
  Omit<
    BoxProps<T>,
    | 'background'
    | 'display'
    | 'fontFamily'
    | 'fontSize'
    | 'lineHeight'
    | 'fontWeight'
    | 'size'
    | 'width'
  > & {
    disabled?: boolean
    isPending?: boolean
    leftIcon: ReactNode | null
    rightIcon: ReactNode | null
    width?: 'full' | 'normal'
  }

export const Button = forwardRef(
  <T extends ElementType>(
    props: PropsWithChildren<ButtonProps<T>>,
    ref: Ref<T>
  ) => {
    const {
      as = 'button',
      children,
      disabled = false,
      isPending = false,
      justifyContent = 'flex-start',
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
          justifyContent={justifyContent}
          alignItems="center"
          gap={width === 'normal' ? 'xtight' : undefined}
        >
          {children}
        </Box>
      </Box>
    )
  }
)
