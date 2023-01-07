import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { PropsWithChildren } from 'react'

import { Text } from '~/components/Text'

import * as styles from './styles.css'

interface TooltipProps {
  align?: 'center' | 'end' | 'start'
  delayDuration?: number
  disabled?: boolean
  hOffset?: number
  message: string | JSX.Element
  side?: 'top' | 'bottom' | 'left' | 'right'
  vOffset?: number
}

export const Tooltip = (props: PropsWithChildren<TooltipProps>) => {
  const {
    align = 'center',
    children,
    delayDuration = 0,
    disabled = false,
    hOffset = 0,
    message,
    side = 'top',
    vOffset = 0,
  } = props

  return disabled ? (
    <>{children}</>
  ) : (
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
