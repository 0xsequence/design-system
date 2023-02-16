import { Box, BoxProps } from '../Box'

import * as styles from './styles.css'

interface ScrollProps extends BoxProps {
  direction?: 'horizontal' | 'vertical'
}

export const Scroll = (props: ScrollProps) => {
  const { children, direction = 'vertical', ...rest } = props

  return (
    <Box
      className={styles.overlay({ direction })}
      position="relative"
      width="full"
      height="full"
      {...rest}
    >
      {/* <Box className={styles.overlay({ direction })} /> */}
      <Box className={styles.scroll({ direction })}>{children}</Box>
    </Box>
  )
}
