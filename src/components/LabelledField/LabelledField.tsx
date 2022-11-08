import { ElementType, PropsWithChildren } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Text } from '~/components/Text'

type LabelledFieldProps<T extends ElementType = 'div'> = BoxProps<T> & {
  label?: string
  labelLocation?: 'left' | 'top' | 'hidden'
}

// TODO: handle error text and secondary description label
// TODO: handle isRequired in label?

export const LabelledField = ({
  children,
  label = '',
  labelLocation = 'hidden',
  ...boxProps
}: PropsWithChildren<LabelledFieldProps<'div'>>) => (
  <Box
    display="flex"
    alignItems={labelLocation === 'left' ? 'center' : 'stretch'}
    flexDirection={labelLocation === 'left' ? 'row' : 'column'}
    gap="tight"
    {...boxProps}
  >
    <Text as="label" variant="small" hidden={labelLocation === 'hidden'}>
      {label}
    </Text>

    {children}
  </Box>
)
