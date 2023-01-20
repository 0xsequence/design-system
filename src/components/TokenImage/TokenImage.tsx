import { clsx } from 'clsx'
import { memo } from 'react'

import { Box, BoxProps } from '../Box'
import { Image } from '../Image'
import { Text } from '../Text'

import * as styles from './styles.css'

type TokenIconProps = BoxProps &
  styles.RootVariants & {
    className?: string
    disableAnimation?: boolean
    style?: any
    src?: string
    symbol?: string
  }

export const TokenImage = memo((props: TokenIconProps) => {
  const {
    borderRadius = 'circle',
    className,
    disableAnimation = false,
    style,
    src,
    symbol,
    size = 'md',
    ...boxProps
  } = props

  return (
    <Box
      className={clsx(className, styles.root({ borderRadius, size }))}
      style={style}
      flexShrink="0"
      {...boxProps}
    >
      {src ? (
        <Image
          className={styles.img}
          disableAnimation={disableAnimation}
          src={src}
        />
      ) : (
        <Text
          className={styles.fallback}
          variant="normal"
          fontWeight="medium"
          color="text50"
          uppercase
        >
          {symbol?.replace(/\s/, '').slice(0, 4)}
        </Text>
      )}
    </Box>
  )
})
