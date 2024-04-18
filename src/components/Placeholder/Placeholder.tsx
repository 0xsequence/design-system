'use client'

import { motion } from 'framer-motion'

import { Box, BoxProps } from '../Box'

import * as styles from './styles.css'

type PlaceholderProps = BoxProps & styles.PlaceholderVariants

export const Placeholder = (props: PlaceholderProps) => {
  const { size, ...rest } = props

  return (
    <Box
      as={motion.div}
      className={styles.placeholder({ size })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      borderRadius="sm"
      {...rest}
    />
  )
}
