import { ElementType, forwardRef, PropsWithChildren, Ref } from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

type TextProps<T extends ElementType = 'span'> = BoxProps<T> &
  styles.TextVariants

export const Text = forwardRef(
  <T extends ElementType>(
    props: PropsWithChildren<TextProps<T>>,
    ref: Ref<T>
  ) => {
    const {
      as = 'span',
      variant = 'inherit',
      hidden,
      italic,
      underline,
      children,
      ...boxProps
    } = props

    return (
      <Box
        as={as}
        className={styles.textVariants({
          variant,
          hidden,
          italic,
          underline,
        })}
        ref={ref}
        {...boxProps}
      >
        {children}
      </Box>
    )
  }
)
