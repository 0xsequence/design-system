import { Box, BoxProps } from '~/components/Box'

interface StackProps extends BoxProps {
  flexDirection?: 'column' | 'column-reverse'
}

export const Stack = (props: StackProps) => {
  const {
    children,
    flexDirection = 'column',
    gap = '2',
    padding = '2',
    ...rest
  } = props

  return (
    <Box flexDirection={flexDirection} gap={gap} padding={padding} {...rest}>
      {children}
    </Box>
  )
}
