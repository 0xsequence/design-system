import { Box } from '~/components/Box'

import { variants, Variants } from './styles.css'

type InfoBubbleProps = Variants & {
  info: number | string
}

export const InfoBubble = ({
  info,
  variant = 'info',
  tiny = false,
}: InfoBubbleProps) => <Box className={variants({ variant, tiny })}>{info}</Box>
