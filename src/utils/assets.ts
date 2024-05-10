export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

const SEQUENCE_ASSETS_URL_PREFIX = 'https://assets.sequence.info/'

type Size = 'small' | 'medium' | 'large'
type SizeAbbreviation = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const sizes: Record<SizeAbbreviation, Size> = {
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'large',
}

const getSize = (size: Size | SizeAbbreviation | undefined) =>
  size ? sizes[size as SizeAbbreviation] || size : 'medium'

export const replaceSize = (
  url: string,
  size: Size | SizeAbbreviation | undefined
) => {
  return url.replace(/\/(small|medium|large)\//, `/${getSize(size)}/`)
}

export const tokenImageUrl = (
  chainId: number,
  contractAddress: string,
  size?: Size | SizeAbbreviation
) => {
  return (
    SEQUENCE_ASSETS_URL_PREFIX +
    `images/tokens/${getSize(size)}/${chainId}/${contractAddress.toLowerCase()}.webp`
  )
}

export const nativeTokenImageUrl = (
  chainId: number,
  size?: Size | SizeAbbreviation
) => tokenImageUrl(chainId, ZERO_ADDRESS, size)

export const networkImageUrl = (
  chainId: number,
  size?: Size | SizeAbbreviation
) => {
  return (
    SEQUENCE_ASSETS_URL_PREFIX +
    `images/networks/${getSize(size)}/${chainId}.webp`
  )
}
