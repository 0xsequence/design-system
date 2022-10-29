import { forwardRef, PropsWithChildren, Ref } from 'react'

import { Box, BoxLayoutProps } from '~/components/Box'

import * as styles from './styles.css'

type TextProps = BoxLayoutProps & styles.Variants

export const Text = forwardRef(
  (props: PropsWithChildren<TextProps>, ref: Ref<HTMLElement>) => {
    const {
      color,
      fontFamily,
      size,
      weight,
      italic,
      underline,
      variant,
      children,
      ...boxProps
    } = props

    return (
      <Box
        as={variant}
        className={styles.variants({
          color,
          fontFamily,
          size,
          weight,
          italic,
          underline,
          variant,
        })}
        ref={ref}
        {...boxProps}
      >
        {children}
      </Box>
    )
  }
)
