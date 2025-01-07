import { cva, VariantProps } from 'class-variance-authority'
import { memo } from 'react'

import { cn } from '~/utils'
import { replaceSize, networkImageUrl } from '~/utils/assets'

import { Image } from '../Image'

const networkImageVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'overflow-hidden',
    'flex-shrink-0',
  ],
  {
    variants: {
      size: {
        xs: 'w-3 h-3',
        sm: 'w-5 h-5',
        md: 'w-8 h-8',
        lg: 'w-10 h-10',
        xl: 'w-16 h-16',
      },
      borderRadius: {
        circle: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
      },
    },
    defaultVariants: {
      borderRadius: 'circle',
    },
  }
)

interface NetworkImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof networkImageVariants> {
  chainId: number
  src?: string
  disableAnimation?: boolean
}

export const NetworkImage = memo((props: NetworkImageProps) => {
  const {
    chainId,
    borderRadius,
    className,
    disableAnimation = false,
    style,
    src,
    size = 'md',
    ...rest
  } = props

  const logoURI = src || replaceSize(networkImageUrl(chainId), size!)

  return (
    <div
      className={cn(networkImageVariants({ size, borderRadius }), className)}
      style={style}
      {...rest}
    >
      <Image
        className="max-w-full max-h-full object-cover w-full"
        disableAnimation={disableAnimation}
        src={logoURI}
      />
    </div>
  )
})
