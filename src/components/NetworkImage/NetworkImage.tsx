import { clsx } from 'clsx'
import { memo } from 'react'

import { replaceSize, networkImageUrl } from '~/utils/assets'

import { Box, BoxProps } from '../Box'
import { Image } from '../Image'

import * as styles from './styles.css'

type NetworkImageProps = BoxProps &
  styles.RootVariants & {
    chainId: number
    src?: string
    disableAnimation?: boolean
  }

export const NetworkImage = memo((props: NetworkImageProps) => {
  const {
    chainId,
    borderRadius = 'circle',
    className,
    disableAnimation = false,
    style,
    src,
    size = 'md',
    ...boxProps
  } = props

  const logoURI = src || replaceSize(networkImageUrl(chainId), size)

  return (
    <Box
      className={clsx(className, styles.root({ borderRadius, size }))}
      style={style}
      flexShrink="0"
      {...boxProps}
    >
      <Image
        className={styles.img}
        disableAnimation={disableAnimation}
        src={logoURI}
      />
    </Box>
  )
})
