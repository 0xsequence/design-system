import { ElementType, forwardRef } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'

import * as styles from './styles.css'

type TextProps = styles.TextVariants

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
      ellipsis,
      uppercase,
      capitalize,
      ...boxProps
    } = props

    return (
      <Box
        as={as}
        className={styles.textVariants({
          variant,
          hidden,
          ellipsis,
          italic,
          underline,
          uppercase,
          capitalize,
        })}
        ref={ref}
        {...boxProps}
      >
        {children}
      </Box>
    )
  }
)
