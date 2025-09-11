import { motion, type HTMLMotionProps } from 'motion/react'
import { useState, type SyntheticEvent } from 'react'

interface ImageProps extends HTMLMotionProps<'img'> {
  fadeIn?: boolean
}

export const Image = (props: ImageProps) => {
  const { fadeIn, onLoad, className, ...rest } = props
  const [isImageLoaded, setImageLoaded] = useState(false)

  const handleLoad = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    setImageLoaded(true)
    onLoad?.(ev)
  }

  return (
    <motion.img
      className={className}
      initial={fadeIn ? { opacity: 0 } : undefined}
      animate={fadeIn ? { opacity: isImageLoaded ? 1 : 0 } : undefined}
      transition={{ duration: 0.2 }}
      onLoad={handleLoad}
      {...rest}
    />
  )
}
