import { cva, VariantProps } from 'class-variance-authority'
import { HTMLMotionProps, motion } from 'motion/react'

import { cn } from '~/utils/classnames.js'

const skeletonVariants = cva(
  [
    'rounded-xs',
    'bg-gradient-skeleton',
    'bg-[length:400%_400%]',
    'bg-no-repeat',
    'animate-skeleton',
  ],
  {
    variants: {
      size: {
        sm: 'w-24 h-4',
        normal: 'w-[100px] h-5',
        md: 'w-[124px] h-6',
        lg: 'w-[124px] h-7',
        xl: 'w-[148px] h-9',
      },
    },
  }
)

interface SkeletonProps
  extends HTMLMotionProps<'div'>,
    VariantProps<typeof skeletonVariants> {}

export const Skeleton = (props: SkeletonProps) => {
  const { className, size, ...rest } = props

  return (
    <motion.div
      className={cn(skeletonVariants({ size }), className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...rest}
    />
  )
}
