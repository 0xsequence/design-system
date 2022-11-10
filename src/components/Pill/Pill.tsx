import { PropsWithChildren } from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

interface PillProps extends BoxProps {}

export const Pill = (props: PropsWithChildren<PillProps>) => {
  const {
    background = 'positive',
    children,
    color = 'white',
    ...boxProps
  } = props
  return (
    <Box
      background={background}
      className={styles.pill}
      color={color}
      {...boxProps}
    >
      {children}
    </Box>
  )
}
