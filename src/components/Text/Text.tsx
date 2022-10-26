import { forwardRef, PropsWithChildren, Ref } from 'react'

import { typography } from '../../css/typography.css'
import { Box } from '../Box/Box'

interface TextProps {
  type: keyof typeof typography
}

export const Text = forwardRef((props: PropsWithChildren<TextProps>, ref: Ref<HTMLElement>) => {
  const { type, children } = props

  return (
    <Box className={typography[type]} ref={ref}>
      {children}
    </Box>
  )
})
