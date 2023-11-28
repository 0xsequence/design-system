import { Box, BoxProps } from '~/components/Box'

type DividerProps = BoxProps

export const Divider = (props: DividerProps) => {
  const { color = 'borderNormal', marginY = '4', ...rest } = props

  return (
    <Box
      as="hr"
      marginY={marginY}
      background={color}
      height="px"
      borderWidth="none"
      {...rest}
    />
  )
}
