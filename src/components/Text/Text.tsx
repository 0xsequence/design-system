import { forwardRef, PropsWithChildren, Ref } from 'react'

import { Box } from '~/components/Box'
import { typography } from '~/css/typography.css'

interface TextProps {
  type: keyof typeof typography
}

export const Text = forwardRef(
  (props: PropsWithChildren<TextProps>, ref: Ref<HTMLElement>) => {
    const { type, children } = props

    return (
      <Box className={typography[type]} ref={ref}>
        {children}
      </Box>
    )
  }
)
