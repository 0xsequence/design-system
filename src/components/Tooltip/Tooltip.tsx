import { Tooltip as TooltipPrimitive } from '@base-ui/react'
import { isValidElement, type PropsWithChildren, type ReactElement, type ReactNode } from 'react'

import { useTheme } from '../../providers/ThemeProvider/ThemeProvider.js'
import { Text } from '../Text/Text.js'

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
    <TooltipPrimitive.Provider delay={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger
          render={
            isValidElement(children)
              ? (children as ReactElement)
              : <span>{children}</span>
          }
        />
        <TooltipPrimitive.Portal container={container}>
          <TooltipPrimitive.Positioner
            side={side}
            align={align}
            sideOffset={vOffset}
            alignOffset={hOffset}
          >
            <TooltipPrimitive.Popup className="bg-primary fill-primary rounded-lg p-2 flex justify-center items-center shadow-primary z-1000 animate-in fade-in-0 zoom-in-95 data-[closed]:animate-out data-[closed]:fade-out-0 data-[closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-fit origin-(--transform-origin)">
              <Text variant="small" fontWeight="medium" color="inverse">
                {message}
              </Text>
              <TooltipPrimitive.Arrow />
            </TooltipPrimitive.Popup>
          </TooltipPrimitive.Positioner>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export { TooltipPrimitive }
