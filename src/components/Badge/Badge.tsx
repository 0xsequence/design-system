import { clsx } from 'clsx'
import { ReactElement } from 'react'

import { Box, BoxProps } from '~/components/Box'

import * as styles from './styles.css'

type BadgeProps = BoxProps &
  styles.BadgeVariants & {
    value: ReactElement | string | number
  }

export const Badge = (props: BadgeProps) => {
  const { className, value, variant = 'info', size = 'md', ...rest } = props

  return (
    <Box
      className={clsx(className, styles.badgeVariants({ variant, size }))}
      display="inline-flex"
      flexShrink="0"
      placeItems="center"
      borderRadius="circle"
      color="white"
      whiteSpace="nowrap"
      {...rest}
    >
      {value}
    </Box>
  )
}
