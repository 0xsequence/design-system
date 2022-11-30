import { Box, BoxProps } from '../Box'

import * as styles from './styles.css'

export const Scroll = (props: BoxProps) => {
  const { children, ...rest } = props
  return (
    <Box className={styles.scroll} {...rest}>
      {children}
    </Box>
  )
}
