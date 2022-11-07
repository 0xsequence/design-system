import { ElementType, PropsWithChildren } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Text } from '~/components/Text'

import * as styles from './styles.css'

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
}: PropsWithChildren<LabelledFieldProps>) => (
  <Box
    className={styles.labelledField}
    display="flex"
    alignItems={labelLocation === 'left' ? 'center' : 'stretch'}
    flexDirection={labelLocation === 'left' ? 'row' : 'column'}
    gap="tight"
    {...boxProps}
  >
    <Text variant="label" hidden={labelLocation === 'hidden'}>
      {label}
    </Text>

    {children}
  </Box>
)
