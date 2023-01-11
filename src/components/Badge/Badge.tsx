import { clsx } from 'clsx'
import { ReactElement } from 'react'

import { Box, BoxProps } from '~/components/Box'

import { badgeVariants, BadgeVariants } from './styles.css'

type BadgeProps = BoxProps &
  BadgeVariants & {
    value: ReactElement | string | number
  }

export const Badge = (props: BadgeProps) => {
  const { className, value, variant = 'info', size = 'md', ...rest } = props

  return (
    <Box
      className={clsx(className, badgeVariants({ variant, size }))}
      display="inline-flex"
      placeItems="center"
      borderRadius="circle"
      color="white"
      paddingX="1"
      {...rest}
    >
      {value}
    </Box>
  )
}
