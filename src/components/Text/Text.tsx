import { forwardRef, PropsWithChildren, Ref } from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

type TextProps = BoxProps & styles.Variants

export const Text = forwardRef(
  (props: PropsWithChildren<TextProps>, ref: Ref<HTMLElement>) => {
    const { italic, underline, variant, children, ...boxProps } = props

    return (
      <Box
        as={variant}
        className={styles.variants({
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
