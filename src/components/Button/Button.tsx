import { createElement, forwardRef, ReactElement } from 'react'

import { Box } from '~/components/Box'
import { Text } from '~/components/Text'
import { IconProps } from '~/icons/types'

import * as styles from './styles.css'

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  size: ButtonSize
  variant: 'primary'
  type?: 'button' | 'submit' | 'reset'
  label?: string
  icon?: (props: IconProps) => ReactElement
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { label, icon, size = 'md', variant, type } = props

    return (
      <Box
        as="button"
        type={type}
        className={styles.button({ size, variant })}
        ref={ref}
      >
        {icon && <Box marginRight="xtight">{createElement(icon)}</Box>}
        <Text color="inherit">{label}</Text>
      </Box>
    )
  }
)
