import { Box, BoxProps } from '~/components/Box'

interface StackProps extends BoxProps {}

export const Stack = (props: StackProps) => {
  const { children, flexDirection, gap } = props

  return (
    <Box
      display="flex"
      color="textBody"
      flexDirection={flexDirection}
      gap={gap}
    >
      {children}
    </Box>
  )
}
