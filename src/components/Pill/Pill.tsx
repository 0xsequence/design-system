import { PropsWithChildren } from 'react'

import { Box, BoxProps } from '~/components/Box'
import { Atoms } from '~/css'

import * as styles from './styles.css'

type PillProps = BoxProps & {
  background?: Atoms['background']
  color?: Atoms['color']
}

export const Pill = (props: PropsWithChildren<PillProps>) => {
  const {
    background = 'positive',
    children,
    color = 'white',
    sx,
    ...boxProps
  } = props
  return (
    <Box
      className={styles.pill}
      sx={{
        background,
        color,
        ...sx,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  )
}
