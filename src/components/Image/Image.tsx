import { motion, type HTMLMotionProps } from 'motion/react'
import { type SyntheticEvent, useState } from 'react'

interface ImageProps extends HTMLMotionProps<'img'> {
  disableAnimation?: boolean
}

export const Image = (props: ImageProps) => {
  const { disableAnimation = false, onLoad, className, ...rest } = props
  const [isImageLoaded, setImageLoaded] = useState(false)

  const handleLoad = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    setImageLoaded(true)
    onLoad?.(ev)
  }

  return (
    <motion.img
      className={className}
      initial={disableAnimation ? undefined : { opacity: 0 }}
      animate={
        disableAnimation ? undefined : { opacity: isImageLoaded ? 1 : 0 }
      }
      transition={{ duration: 0.2 }}
      onLoad={disableAnimation ? undefined : handleLoad}
      {...rest}
    />
  )
}
