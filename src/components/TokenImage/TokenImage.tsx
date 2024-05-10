import { clsx } from 'clsx'
import { memo } from 'react'

import { Box, BoxProps } from '../Box'
import { Image } from '../Image'
import { NetworkImage } from '../NetworkImage'
import { Text } from '../Text'

import * as styles from './styles.css'

type TokenImageProps = BoxProps &
  styles.RootVariants & {
    className?: string
    disableAnimation?: boolean
    style?: any
    src?: string
    symbol?: string
    withNetwork?: number
  }

export const TokenImage = memo((props: TokenImageProps) => {
  const {
    borderRadius = 'circle',
    className,
    disableAnimation = false,
    style,
    src,
    symbol,
    size = 'md',
    withNetwork,
    ...boxProps
  } = props

  return (
    <Box
      className={clsx(className, styles.root({ size }))}
      style={style}
      flexShrink="0"
      {...boxProps}
    >
      {src ? (
        <Image
          className={styles.img}
          disableAnimation={disableAnimation}
          borderRadius={borderRadius}
          overflow="hidden"
          src={src}
        />
      ) : (
        <Text
          className={styles.fallback}
          variant="normal"
          fontWeight="medium"
          color="text50"
          borderRadius={borderRadius}
          overflow="hidden"
          uppercase
        >
          {symbol?.replace(/\s/, '').slice(0, 4)}
        </Text>
      )}
      {withNetwork && (
        <Box
          position="absolute"
          zIndex="1"
          borderRadius="circle"
          borderWidth="thin"
          borderStyle="solid"
          borderColor="backgroundPrimary"
          background="backgroundPrimary"
          placeItems="center"
          style={{ width: 16 + 2, height: 16 + 2, right: -2, bottom: -2 }}
        >
          <NetworkImage
            chainId={withNetwork}
            style={{ width: 16, height: 16 }}
          />
        </Box>
      )}
    </Box>
  )
})
