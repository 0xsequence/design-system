import { Box, BoxProps } from '~/components/Box'

interface RowProps extends BoxProps {
  flexDirection?: 'row' | 'row-reverse'
}

export const Row = (props: RowProps) => {
  const {
    children,
    flexDirection = 'row',
    gap = '2',
    justifyContent = 'flex-start',
    alignItems = 'center',
    ...rest
  } = props

  return (
    <Box
      flexDirection={flexDirection}
      gap={gap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
      {children}
    </Box>
  )
}
