import { motion } from 'framer-motion'

import { Box, BoxProps } from '../Box'

import * as styles from './styles.css'

type SkeletonProps = BoxProps & styles.SkeletonVariants

export const Skeleton = (props: SkeletonProps) => {
  const { size, ...rest } = props

  return (
    <Box
      as={motion.div}
      className={styles.skeleton({ size })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      borderRadius="sm"
      {...rest}
    />
  )
}
