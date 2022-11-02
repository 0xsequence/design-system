import { forwardRef, Ref } from 'react'

import { Box } from '~/components/Box'

import * as styles from './styles.css'

type SpinnerProps = {
  // color?: BoxProps['color']
} & styles.Variants

export const Spinner = forwardRef(
  (props: SpinnerProps, ref: Ref<HTMLDivElement>) => {
    const { size = 'md' } = props

    return (
      <Box className={styles.variants({ size })} ref={ref}>
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

Spinner.displayName = 'Spinner'
