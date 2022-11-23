import { ElementType } from 'react'

import { Box, PolymorphicComponent, PolymorphicProps } from '~/components/Box'
import { Text } from '~/components/Text'

type LabelledFieldProps = {
  color?: string
  label?: string
  labelLocation?: 'left' | 'top' | 'hidden'
  forId?: string
}

// TODO: handle error text and secondary description label
// TODO: handle isRequired in label?

export const LabelledField: PolymorphicComponent<LabelledFieldProps, 'div'> = <
  T extends ElementType
>({
  color,
  children,
  label = '',
  labelLocation = 'hidden',
  forId,
  ...boxProps
}: PolymorphicProps<LabelledFieldProps, T>) => (
  <Box
    color={color ?? 'textBody'}
    alignItems={labelLocation === 'left' ? 'center' : 'stretch'}
    flexDirection={labelLocation === 'left' ? 'row' : 'column'}
    gap="3"
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
