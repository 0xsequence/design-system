import { ElementType, forwardRef } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'

import * as styles from './styles.css'

type SpinnerProps = {} & styles.Variants

export const Spinner: PolymorphicComponent<SpinnerProps> = forwardRef(
  <T extends ElementType>(
    props: PolymorphicProps<SpinnerProps, T>,
    ref: PolymorphicRef<T>
  ) => {
    const { size = 'md', ...rest } = props

    return (
      <Box className={styles.variants({ size })} ref={ref} {...rest}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="outside-clip">
            <circle cx="12" cy="12" r="12" />
          </clipPath>
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="11"
            strokeDasharray="42"
            strokeLinecap="round"
            stroke="currentColor"
            clipPath="url(#outside-clip)"
          />
          <circle
            cx="12"
            cy="12"
            fill="none"
            opacity="0.25"
            r="11"
            stroke="currentColor"
            strokeLinecap="round"
            clipPath="url(#outside-clip)"
          />
        </svg>
      </Box>
    )
  }
)
