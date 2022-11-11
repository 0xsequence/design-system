import { clsx } from 'clsx'
import { forwardRef, ElementType } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'

import * as styles from './styles.css'

type SpinnerProps = styles.SpinnerVariants

export const Spinner: PolymorphicComponent<SpinnerProps> = forwardRef(
  <T extends ElementType>(
    props: PolymorphicProps<SpinnerProps, T>,
    ref: PolymorphicRef<T>
  ) => {
    const { className, size = 'md', ...rest } = props

    return (
      <Box
        className={clsx(className, styles.spinnerVariants({ size }))}
        ref={ref}
        {...rest}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="10"
            strokeDasharray="42"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            fill="none"
            opacity="0.25"
            r="10"
            strokeLinecap="round"
          />
        </svg>
      </Box>
    )
  }
)
