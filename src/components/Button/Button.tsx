import { forwardRef, PropsWithChildren, Ref, ElementType } from 'react'

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
    | 'size'
    | 'textSize'
    | 'weight'
    | 'width'
  > & {
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
