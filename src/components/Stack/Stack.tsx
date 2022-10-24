import { ReactNode } from 'react'

import { Box } from '../Box/Box'

interface StackProps {
  label?: JSX.Element | string
  contentRight?: JSX.Element
  children: ReactNode
  style?: any
  className?: string
  layout?: 'rows' | 'grid'
}

export const Stack = (props: StackProps) => {
  const { children } = props

  return <Box display="flex">{children}</Box>
}
