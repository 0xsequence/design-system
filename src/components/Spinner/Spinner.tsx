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
      <Box
        className={styles.variants({ size })}
        color="text50"
        ref={ref}
        {...rest}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="10.5"
            strokeDasharray="42"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            fill="none"
            opacity="0.25"
            r="10.5"
            strokeLinecap="round"
          />
        </svg>
      </Box>
    )
  }
)
