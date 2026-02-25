import { type ComponentProps } from 'react'

import { cn } from '../../utils/classnames.js'

function AspectRatio({
  ratio = 1,
  style,
  className,
  ...props
}: ComponentProps<'div'> & { ratio?: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      style={{ aspectRatio: ratio, ...style }}
      className={cn('w-full', className)}
      {...props}
    />
  )
}

export { AspectRatio }
