import { ElementType, forwardRef } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '../Box'

import * as styles from './styles.css'

interface CardProps {
  hover?: boolean
  outlined?: boolean
  disabled?: boolean
  blur?: boolean
}

export const Card: PolymorphicComponent<CardProps, 'div'> = forwardRef(
  <T extends ElementType>(
    props: PolymorphicProps<CardProps, T>,
    ref: PolymorphicRef<T>
  ) => {
    const {
      children,
      hover,
      outlined,
      disabled,
      blur,
      width = 'full',
      ...rest
    } = props
    return (
      <Box
        className={styles.cardVariants({ hover, outlined, disabled, blur })}
        background={outlined ? 'transparent' : 'backgroundSecondary'}
        borderRadius="md"
        padding="4"
        width={width}
        ref={ref}
        {...rest}
      >
        {children}
      </Box>
    )
  }
)
