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
    ...rest
  } = props
  return (
    <Box
      className={styles.pill}
      sx={{
        background,
        color,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}
