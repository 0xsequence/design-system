import { cva, type VariantProps } from 'class-variance-authority'
import { memo, type HTMLAttributes } from 'react'

import { networkImageUrl, replaceSize } from '../../utils/assets.js'
import { cn } from '../../utils/classnames.js'
import { Image } from '../Image/Image.js'

const networkImageVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'shrink-0',
    'rounded-full',
  ],
  {
    variants: {
      size: {
        xs: 'size-3',
        sm: 'size-5',
        md: 'size-8',
        lg: 'size-10',
        xl: 'size-16',
      },
    },
  }
)

interface NetworkImageProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof networkImageVariants> {
  chainId: number
  src?: string
  fadeIn?: boolean
}

export const NetworkImage = memo((props: NetworkImageProps) => {
  const { chainId, className, fadeIn, style, src, size = 'md', ...rest } = props

  const logoURI = src || replaceSize(networkImageUrl(chainId), size!)

  return (
    <div
      className={cn(networkImageVariants({ size }), className)}
      style={style}
      {...rest}
    >
      <Image
        className="max-w-full max-h-full object-cover w-full"
        fadeIn={fadeIn}
        src={logoURI}
      />
    </div>
  )
})
