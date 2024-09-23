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

const NETWORK_IMAGE_SIZE = '40%'
const NETWORK_IMAGE_OFFSET = '-2%'

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
          className={clsx(styles.img, withNetwork && styles.cutout)}
          disableAnimation={disableAnimation}
          borderRadius={borderRadius}
          overflow="hidden"
          src={src}
        />
      ) : (
        <Text
          className={clsx(styles.fallback, withNetwork && styles.cutout)}
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
        <NetworkImage
          chainId={withNetwork}
          position="absolute"
          zIndex="1"
          style={{
            width: NETWORK_IMAGE_SIZE,
            height: NETWORK_IMAGE_SIZE,
            right: NETWORK_IMAGE_OFFSET,
            bottom: NETWORK_IMAGE_OFFSET,
          }}
        />
      )}
    </Box>
  )
})
