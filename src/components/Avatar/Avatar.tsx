import clsx from 'clsx'
import { memo } from 'react'
import Blockies from 'react-blockies'

import { Box, BoxLayoutProps } from '../Box'

import * as styles from './styles.css'

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

const scale: Record<AvatarSize, number> = {
  sm: 3,
  md: 4,
  lg: 6,
  xl: 8
}

interface AvatarProps extends BoxLayoutProps {
  address: string
  size?: AvatarSize
  className?: string
}

export const Avatar = memo((props: AvatarProps) => {
  const { className, address, size = 'md', ...boxProps } = props

  return (
    <Box
      as={Blockies}
      className={clsx(styles.root, styles.blockies, className)}
      seed={address.toUpperCase()}
      size={8}
      scale={scale[size]}
      {...boxProps}
    />
  )
})