import { ElementType, forwardRef } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Atoms } from '~/css'

import * as styles from './styles.css'

type TextProps = styles.TextVariants & {
  weight?: Atoms['fontWeight']
  color?: Atoms['color']
}

export const Text: PolymorphicComponent<TextProps, 'span'> = forwardRef(
  <T extends ElementType>(
    props: PolymorphicProps<TextProps, T>,
    ref: PolymorphicRef<T>
  ) => {
    const {
      as = 'span',
      variant = 'inherit',
      hidden,
      italic,
      underline,
      children,
      weight,
      color,
      sx,
      ...rest
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
        sx={{
          fontWeight: weight,
          color: color,
          ...sx,
        }}
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    )
  }
)
