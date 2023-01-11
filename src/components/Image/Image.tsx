import { motion } from 'framer-motion'
import { SyntheticEvent, useState } from 'react'

import { Box, BoxProps } from '../Box'

interface ImageProps extends BoxProps<typeof motion.img> {}

export const Image = (props: ImageProps) => {
  const { onLoad, ...rest } = props
  const [isImageLoaded, setImageLoaded] = useState(false)

  const handleLoad = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    setImageLoaded(true)
    onLoad?.(ev)
  }

  return (
    <Box
      as={motion.img}
      initial={{ opacity: 0 }}
      animate={{ opacity: isImageLoaded ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      onLoad={handleLoad}
      {...rest}
    />
  )
}
