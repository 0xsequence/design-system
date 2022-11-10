import { clsx } from 'clsx'
import { memo } from 'react'

import { Box, BoxLayoutProps } from '../Box'

import * as styles from './styles.css'

type TokenIconSize = 'xs' | 'sm' | 'md' | 'lg'

interface TokenIconProps extends BoxLayoutProps {
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
        <div className={styles.fallback}>
          {symbol?.replace(/\s/, '').slice(0, 4)}
        </div>
      )}
    </Box>
  )
})
