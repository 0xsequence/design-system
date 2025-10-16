import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { PropsWithChildren, ReactNode } from 'react'

import { Text } from '~/components/Text/Text.js'
import { useTheme } from '~/components/ThemeProvider/ThemeProvider.js'

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
            className="bg-primary fill-primary rounded-lg p-2 flex justify-center items-center shadow-primary z-1000 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-fit origin-(--radix-tooltip-content-transform-origin)"
            side={side}
            align={align}
            sideOffset={vOffset}
            alignOffset={hOffset}
          >
            <Text variant="small" fontWeight="medium" color="inverse">
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
