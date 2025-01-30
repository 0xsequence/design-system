import { cva, VariantProps } from 'class-variance-authority'
import { memo } from 'react'

import { cn } from '~/utils'

import { Image } from '../Image'
import { NetworkImage } from '../NetworkImage'
import { Text } from '../Text'

const NETWORK_IMAGE_SIZE = '40%'
const NETWORK_IMAGE_OFFSET = '-2%'

const tokenImageVariants = cva(
  ['relative', 'flex', 'items-center', 'justify-center', 'shrink-0'],
  {
    variants: {
      size: {
        xs: 'w-3 h-3 text-[4px]',
        sm: 'w-5 h-5 text-[6px]',
        md: 'w-8 h-8 text-[9px]',
        lg: 'w-10 h-10 text-[11px]',
        xl: 'w-16 h-16 text-[16px]',
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
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tokenImageVariants> {
  disableAnimation?: boolean
  src?: string
  symbol?: string
  withNetwork?: number
}

export const TokenImage = memo((props: TokenImageProps) => {
  const {
    className,
    disableAnimation = false,
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
        <Image
          className={cn(
            'rounded-full max-w-full max-h-full object-cover w-full overflow-hidden',
            withNetwork && maskClass
          )}
          disableAnimation={disableAnimation}
          src={src}
        />
      ) : (
        <Text
          className={cn(
            'bg-background-secondary rounded-full w-full h-full flex items-center justify-center overflow-hidden text-inherit',
            withNetwork && maskClass
          )}
          variant="inherit"
          fontWeight="medium"
          color="muted"
          uppercase
        >
          {symbol?.replace(/\s/, '').slice(0, 4)}
        </Text>
      )}
      {withNetwork && (
        <NetworkImage
          chainId={withNetwork}
          className="absolute z-1"
          disableAnimation={disableAnimation}
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
