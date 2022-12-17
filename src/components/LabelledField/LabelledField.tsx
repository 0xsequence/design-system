import { ElementType } from 'react'

import { Box, PolymorphicComponent, PolymorphicProps } from '~/components/Box'
import { Text } from '~/components/Text'

import * as styles from './styles.css'

export type HiddenLabel = {
  label?: string
  labelLocation?: 'hidden'
}

export type HasLabel = {
  label: string
  labelLocation: 'left' | 'right' | 'top'
}

type LabelledFieldProps = (HasLabel | HiddenLabel) & {
  color?: string
  description?: string
  forId?: string
  disabled?: boolean
}

// TODO: handle error text and secondary description label
// TODO: handle isRequired in label?

export const LabelledField: PolymorphicComponent<LabelledFieldProps, 'div'> = <
  T extends ElementType
>({
  color,
  children,
  description,
  label = '',
  labelLocation = 'top',
  forId,
  disabled,
  ...boxProps
}: PolymorphicProps<LabelledFieldProps, T>) => {
  const renderLabel = () => (
    <Box flexDirection="column" gap="0.5">
      {label && (
        <Text
          variant="small"
          hidden={labelLocation === 'hidden'}
          opacity={disabled ? '50' : '100'}
        >
          {label}
        </Text>
      )}

      {description && (
        <Text
          color="text50"
          variant="small"
          hidden={labelLocation === 'hidden'}
          opacity={disabled ? '50' : '100'}
        >
          {description}
        </Text>
      )}
    </Box>
  )

  return (
    <Box
      as="label"
      className={styles.labelVariants({ labelLocation })}
      color={color ?? 'text100'}
      htmlFor={forId}
      {...boxProps}
    >
      {['left', 'top', 'hidden'].includes(labelLocation) && renderLabel()}
      {children}
      {labelLocation === 'right' && renderLabel()}
    </Box>
  )
}
