import { forwardRef, PropsWithChildren } from 'react'

import { typography } from '../../css/typography.css'
import { Box } from '../Box/Box'

interface TextProps {
  type: keyof typeof typography
}

export const Text = forwardRef((props: PropsWithChildren<TextProps>) => {
  const { type, children } = props

  return <Box className={typography[type]}>{children}</Box>
})
