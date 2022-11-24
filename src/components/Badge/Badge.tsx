import { Box } from '~/components/Box'

import { badgeVariants, BadgeVariants } from './styles.css'

type BadgeProps = BadgeVariants & {
  info: number | string
}

export const Badge = ({ info, variant = 'info', sm = false }: BadgeProps) => (
  <Box className={badgeVariants({ variant, sm })}>{info}</Box>
)
