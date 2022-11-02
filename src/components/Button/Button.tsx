import { forwardRef, PropsWithChildren, Ref } from 'react'

import { Box, BoxLayoutProps } from '~/components/Box'

import * as styles from './styles.css'

type ButtonProps = styles.Variants &
  BoxLayoutProps & {
    type?: 'button' | 'submit' | 'reset'
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: PropsWithChildren<ButtonProps>, ref: Ref<HTMLElement>) => {
    const { children, size = 'md', variant = 'solid', type = 'button' } = props

    return (
      <Box
        as="button"
        type={type}
        className={styles.variants({ size, variant })}
        ref={ref}
      >
        <Box as="span" display="flex" placeItems="flex-start">
          {children}
        </Box>
      </Box>
    )
  }
)
