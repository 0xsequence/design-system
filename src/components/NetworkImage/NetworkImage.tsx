import { ComponentProps } from 'react'

import { replaceSize, networkImageUrl } from '~/utils/assets'

import { TokenImage } from '../TokenImage'

interface NetworkImageProps extends ComponentProps<typeof TokenImage> {
  chainId: number
}

export const NetworkImage = (props: NetworkImageProps) => {
  const { chainId, size, ...rest } = props

  const logoURI = replaceSize(networkImageUrl(chainId), size) + '?v3'

  return <TokenImage src={logoURI} size={size} {...rest} />
}
