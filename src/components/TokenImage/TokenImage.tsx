import { clsx } from 'clsx'
import { memo } from 'react'

import { Box, BoxProps } from '../Box'
import { Text } from '../Text'

import * as styles from './styles.css'

type TokenIconSize = 'xs' | 'sm' | 'md' | 'lg'

interface TokenIconProps extends BoxProps {
  className?: string
  style?: any
  src?: string
  symbol?: string
  size?: TokenIconSize
}

export const TokenImage = memo((props: TokenIconProps) => {
  const { className, style, src, symbol, size = 'md', ...boxProps } = props

  return (
    <Box
      className={clsx(className, styles.root({ size }))}
      style={style}
      {...boxProps}
    >
      {src ? (
        <img className={styles.img} src={src} />
      ) : (
        <Text
          className={styles.fallback}
          variant="normal"
          fontWeight="medium"
          color="textFaded"
          uppercase
        >
          {symbol?.replace(/\s/, '').slice(0, 4)}
        </Text>
      )}
    </Box>
  )
})
