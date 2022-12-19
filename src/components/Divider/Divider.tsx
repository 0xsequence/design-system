import { Box, BoxProps } from '~/components/Box'

type DividerProps = {
  color?: BoxProps['background']
  marginBottom?: BoxProps['marginBottom']
  marginTop?: BoxProps['marginTop']
}

export const Divider = ({
  color = 'borderNormal',
  marginBottom = '4',
  marginTop = '4',
}: DividerProps) => (
  <Box
    as="hr"
    marginTop={marginTop}
    marginBottom={marginBottom}
    background={color}
    height="px"
    borderWidth="none"
  />
)
