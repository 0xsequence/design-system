import { PropsWithChildren } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Text } from '~/components/Text'

import * as styles from './styles.css'

type LabelledFieldProps = BoxProps & {
  label?: string
  labelLocation?: 'left' | 'top' | 'hidden'
}

export const LabelledField = ({
  children,
  label = '',
  labelLocation = 'hidden',
  ...boxProps
}: PropsWithChildren<LabelledFieldProps>) => (
  <Box
    className={styles.labelledField}
    alignItems={labelLocation === 'left' ? 'center' : 'stretch'}
    flexDirection={labelLocation === 'left' ? 'row' : 'column'}
    gap={labelLocation === 'left' ? 'tight' : 'normal'}
    {...boxProps}
  >
    <Text as="label">{label}</Text>

    {children}
  </Box>
)
