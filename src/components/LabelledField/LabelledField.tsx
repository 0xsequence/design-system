import { ElementType } from 'react'

import { Box, PolymorphicComponent, PolymorphicProps } from '~/components/Box'
import { Text } from '~/components/Text'

type LabelledFieldProps = {
  color?: string
  label?: string
  labelLocation?: 'left' | 'right' | 'top' | 'hidden'
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
}: PolymorphicProps<LabelledFieldProps, T>) => {
  const renderLabel = () => (
    <Text
      as="label"
      variant="small"
      hidden={labelLocation === 'hidden'}
      htmlFor={forId}
    >
      {label}
    </Text>
  )

  const horizontal = labelLocation === 'left' || labelLocation === 'right'

  return (
    <Box
      color={color ?? 'textBody'}
      alignItems={horizontal ? 'center' : 'stretch'}
      flexDirection={horizontal ? 'row' : 'column'}
      gap="3"
      {...boxProps}
    >
      {['left', 'top', 'hidden'].includes(labelLocation) && renderLabel()}
      {children}
      {labelLocation === 'right' && renderLabel()}
    </Box>
  )
}
