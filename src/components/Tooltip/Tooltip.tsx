import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { PropsWithChildren, ReactNode } from 'react'

import { Text } from '~/components/Text/index.js'
import { useTheme } from '~/components/ThemeProvider/index.js'

interface TooltipProps {
  align?: 'center' | 'end' | 'start'
  delayDuration?: number
  disabled?: boolean
  hOffset?: number
  message: ReactNode
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

  const { container } = useTheme()

  return disabled ? (
    <>{children}</>
  ) : (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={delayDuration}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal container={container}>
          <TooltipPrimitive.Content
            className="backdrop-blur-xs bg-background-raised rounded-lg px-4 pb-3 pt-2 shadow-[0_0_10px_0_rgba(0,0,0,0.5)] fill-background-raised z-1000"
            side={side}
            align={align}
            sideOffset={vOffset}
            alignOffset={hOffset}
          >
            <Text variant="small" fontWeight="medium" color="secondary">
              {message}
            </Text>
            <TooltipPrimitive.Arrow offset={12} width={10} height={5} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export { TooltipPrimitive }
