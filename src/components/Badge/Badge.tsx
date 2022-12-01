import { ReactElement } from 'react'

import { Box } from '~/components/Box'

import { badgeVariants, BadgeVariants } from './styles.css'

type BadgeProps = BadgeVariants & {
  value: ReactElement | string | number
}

export const Badge = ({ value, variant = 'info', size = 'md' }: BadgeProps) => (
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
