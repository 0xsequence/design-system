import { Box, BoxProps } from '~/components/Box'
import { Text } from '~/components/Text'

type LabelledFieldProps = BoxProps & {
  label?: string
  labelLocation?: 'left' | 'top' | 'hidden'
  forId?: string
}

// TODO: handle error text and secondary description label
// TODO: handle isRequired in label?

export const LabelledField = ({
  children,
  label = '',
  forId,
  labelLocation = 'hidden',
  sx,
  ...boxProps
}: LabelledFieldProps) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: labelLocation === 'left' ? 'center' : 'stretch',
      flexDirection: labelLocation === 'left' ? 'row' : 'column',
      gap: 'tight',
      ...sx,
    }}
    {...boxProps}
  >
    <Text
      as="label"
      variant="small"
      hidden={labelLocation === 'hidden'}
      htmlFor={forId}
    >
      {label}
    </Text>

    {children}
  </Box>
)
