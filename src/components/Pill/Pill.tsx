import { PropsWithChildren } from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

type PillProps = Pick<
  BoxProps,
  | 'background'
  | 'color'
  | 'margin'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
>

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
