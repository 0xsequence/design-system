import { Box } from 'components/Box'
import { IconProps } from 'icons'
import { createElement, forwardRef, ReactElement } from 'react'

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
        {icon && <Box marginRight="sm">{createElement(icon, { size })}</Box>}
        <div>{label}</div>
      </Box>
    )
  }
)
