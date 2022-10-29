import { ReactNode } from 'react'

import { Box, BoxLayoutProps, BoxProps } from '~/components/Box'

interface StackProps extends BoxLayoutProps {
  children: ReactNode
  style?: any
  className?: string
  flexDirection?: BoxProps['flexDirection']
  gap?: BoxProps['gap']
}

export const Stack = (props: StackProps) => {
  const { children, flexDirection, gap } = props

  return (
    <Box
      display="flex"
      color="textTitle"
      flexDirection={flexDirection}
      gap={gap}
    >
      {children}
    </Box>
  )
}
