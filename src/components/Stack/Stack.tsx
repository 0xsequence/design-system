import { Box, BoxProps } from '~/components/Box'
import { Atoms } from '~/css'

interface StackProps extends BoxProps {
  flexDirection?: Atoms['flexDirection']
  gap?: Atoms['gap']
}

export const Stack = (props: StackProps) => {
  const { children, flexDirection, gap, sx, ...rest } = props

  return (
    <Box
      sx={{
        display: 'flex',
        color: 'textBody',
        flexDirection,
        gap,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}
