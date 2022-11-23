import { Box, BoxProps } from '~/components/Box'

interface StackProps extends BoxProps {}

export const Stack = (props: StackProps) => {
  const { children, flexDirection = 'column', gap = '2', ...rest } = props

  return (
    <Box flexDirection={flexDirection} gap={gap} {...rest}>
      {children}
    </Box>
  )
}
