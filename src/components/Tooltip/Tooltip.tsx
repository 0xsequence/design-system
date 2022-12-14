import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { PropsWithChildren } from 'react'

import { Text } from '~/components/Text'

import * as styles from './styles.css'

interface TooltipProps {
  message: string | JSX.Element
  delayDuration?: number
  align?: 'center' | 'end' | 'start'
  vOffset?: number
  hOffset?: number
  side?: 'top' | 'bottom'
}

export const Tooltip = (props: PropsWithChildren<TooltipProps>) => {
  const {
    children,
    message,
    delayDuration = 0,
    side = 'top',
    align = 'center',
    vOffset = 0,
    hOffset = 0,
  } = props

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={delayDuration}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          className={styles.content}
          side={side}
          align={align}
          sideOffset={vOffset}
          alignOffset={hOffset}
        >
          <Text fontSize="xsmall" fontWeight="medium" color="text80">
            {message}
          </Text>
          <TooltipPrimitive.Arrow offset={12} width={10} height={5} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
