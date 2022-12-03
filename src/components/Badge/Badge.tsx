import { ReactElement } from 'react'

import { Box } from '~/components/Box'

import { badgeVariants, BadgeVariants } from './styles.css'

type BadgeProps = BadgeVariants & {
  value: ReactElement | string | number
}

export const Badge = (props: BadgeProps) => {
  const { value, variant = 'info', size = 'md' } = props

  return (
    <Box
      className={badgeVariants({ variant, size })}
      display="inline-flex"
      placeItems="center"
      borderRadius="circle"
      color="white"
      paddingX="1"
    >
      {value}
    </Box>
  )
}
