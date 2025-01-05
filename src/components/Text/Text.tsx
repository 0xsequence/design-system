import { clsx } from 'clsx'
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
      className,
      hidden,
      italic,
      underline,
      children,
      ellipsis,
      uppercase,
      capitalize,
      ...boxProps
    } = props

    // Merge as variant as prop values so they can be overridden rather than using textVariants recipe
    const textVariantProps = styles.rawTextVariants[variant]

    return (
      <Box
        as={as}
        className={clsx(
          className,
          styles.textVariants({
            hidden,
            ellipsis,
            italic,
            underline,
            uppercase,
            capitalize,
          })
        )}
        ref={ref}
        {...textVariantProps}
        {...boxProps}
      >
        {children}
      </Box>
    )
  }
)
