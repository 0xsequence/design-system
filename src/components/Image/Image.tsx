import { motion } from 'framer-motion'
import { useState } from 'react'

import { Box, BoxProps } from '../Box'

interface ImageProps extends BoxProps<typeof motion.img> {}

export const Image = (props: ImageProps) => {
  const [isImageLoaded, setImageLoaded] = useState(false)

  return (
    <Box
      as={motion.img}
      initial={{ opacity: 0 }}
      animate={{ opacity: isImageLoaded ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      onLoad={() => setImageLoaded(true)}
      {...props}
    />
  )
}
