import { clsx } from 'clsx'
import { ElementType, ReactNode } from 'react'

import { Box, PolymorphicComponent, PolymorphicProps } from '~/components/Box'
import { Text } from '~/components/Text'

import * as styles from './styles.css'

export interface FieldProps {
  id?: string
  label?: string | ReactNode
  description?: string | ReactNode
  labelLocation?: 'left' | 'right' | 'top' | 'hidden'
  disabled?: boolean
  required?: boolean // TODO
  error?: string // TODO
}

// TODO: handle error text and secondary description label
// TODO: handle isRequired in label?

export const Field: PolymorphicComponent<FieldProps, 'div'> = <
  T extends ElementType,
>(
  props: PolymorphicProps<FieldProps, T>
) => {
  const {
    id,
    label,
    description,
    labelLocation = 'top',
    children,
    className,
    ...rest
  } = props

  const renderLabel = () =>
    label || description ? (
      <Box flexDirection="column" gap="0.5">
        {label && (
          <Text
            variant="small"
            color="text100"
            hidden={labelLocation === 'hidden'}
          >
            {label}
          </Text>
        )}

        {description && (
          <Text
            variant="small"
            color="text50"
            hidden={labelLocation === 'hidden'}
          >
            {description}
          </Text>
        )}
      </Box>
    ) : null

  return (
    <Box
      as="label"
      className={clsx(styles.labelVariants({ labelLocation }), className)}
      htmlFor={id}
      {...rest}
    >
      {['left', 'top', 'hidden'].includes(labelLocation) && renderLabel()}
      {children}
      {labelLocation === 'right' && renderLabel()}
    </Box>
  )
}
