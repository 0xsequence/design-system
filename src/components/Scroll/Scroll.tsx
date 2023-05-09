import { Box, BoxProps } from '../Box'

import * as styles from './styles.css'

interface ScrollProps extends BoxProps {
  direction?: 'horizontal' | 'vertical'
  shadows?: boolean
  contentProps?: BoxProps
}

export const Scroll = (props: ScrollProps) => {
  const {
    children,
    shadows = true,
    direction = 'vertical',
    contentProps,
    ...rest
  } = props

  return (
    <Box
      className={styles.overlay({ direction, shadows })}
      position="relative"
      width="full"
      height="full"
      {...rest}
    >
      <Box
        className={styles.scroll({ direction })}
        background="backgroundPrimary"
        {...contentProps}
      >
        {children}
      </Box>
    </Box>
  )
}
