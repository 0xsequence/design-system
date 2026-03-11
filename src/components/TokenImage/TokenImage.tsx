import { cva, type VariantProps } from 'class-variance-authority'
import { memo, type HTMLAttributes } from 'react'

import { cn } from '../../utils/classnames.js'
import { NetworkImage } from '../NetworkImage/NetworkImage.js'

const NETWORK_IMAGE_SIZE = '40%'
const NETWORK_IMAGE_OFFSET = '-2%'

const tokenImageVariants = cva(
  ['relative', 'flex', 'items-center', 'justify-center', 'shrink-0'],
  {
    variants: {
      size: {
        xs: 'size-3 text-[4px]',
        sm: 'size-5 text-[6px]',
        md: 'size-8 text-[9px]',
        lg: 'size-10 text-[11px]',
        xl: 'size-16 text-[16px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const maskClass =
  '[mask-image:radial-gradient(circle_at_82%_82%,transparent_22%,black_0)]'

interface TokenImageProps
  extends
    HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tokenImageVariants> {
  src?: string
  symbol?: string
  withNetwork?: number
}

export const TokenImage = memo((props: TokenImageProps) => {
  const {
    className,
    style,
    src,
    symbol,
    size = 'md',
    withNetwork,
    ...rest
  } = props

  return (
    <div
      className={cn(tokenImageVariants({ size }), className)}
      style={style}
      {...rest}
    >
      {src ? (
        <img
          className={cn(
            'rounded-full max-w-full max-h-full object-cover w-full overflow-hidden',
            withNetwork && maskClass
          )}
          src={src}
          alt={`${symbol} Token Logo`}
        />
      ) : (
        <span
          className={cn(
            'text-muted uppercase font-medium bg-background-secondary rounded-full w-full h-full flex items-center justify-center overflow-hidden',
            withNetwork && maskClass
          )}
        >
          {symbol?.replace(/\s/, '').slice(0, 4)}
        </span>
      )}
      {withNetwork && (
        <NetworkImage
          chainId={withNetwork}
          className="absolute z-1"
          style={{
            width: NETWORK_IMAGE_SIZE,
            height: NETWORK_IMAGE_SIZE,
            right: NETWORK_IMAGE_OFFSET,
            bottom: NETWORK_IMAGE_OFFSET,
          }}
        />
      )}
    </div>
  )
})
