import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip'
import type { ComponentProps } from 'react'
import {
  isValidElement,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from 'react'

import { useTheme } from '../../providers/ThemeProvider/ThemeProvider.js'
import { popupTransitionStyle } from '../../styles.js'
import { cn } from '../../utils/classnames.js'

function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  )
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipArrow({
  className,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Arrow>) {
  return (
    <TooltipPrimitive.Arrow
      data-slot="tooltip-arrow"
      className={cn(
        'pointer-events-none relative block h-1.5 w-3 overflow-clip',
        "before:absolute before:bottom-0 before:left-1/2 before:box-border before:block before:content-['']",
        'before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))]',
        'before:translate-x-[-50%] before:translate-y-1/2 before:rotate-45',
        'before:border before:border-border-normal before:bg-background-tooltip',
        'dark:before:border-primary',
        'data-[side=top]:bottom-[-6px] data-[side=top]:rotate-180',
        'data-[side=bottom]:top-[-6px] data-[side=bottom]:rotate-0',
        'data-[side=left]:right-[-9px] data-[side=left]:rotate-90',
        'data-[side=right]:left-[-9px] data-[side=right]:-rotate-90',
        'data-[side=inline-start]:right-[-9px] data-[side=inline-start]:rotate-90',
        'data-[side=inline-end]:left-[-9px] data-[side=inline-end]:-rotate-90',
        className
      )}
      {...props}
    />
  )
}

function TooltipContent({
  className,
  side = 'top',
  sideOffset = 4,
  align = 'center',
  alignOffset = 0,
  showArrow = true,
  children,
  container,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  > &
  Pick<TooltipPrimitive.Portal.Props, 'container'> & {
    showArrow?: boolean
  }) {
  return (
    <TooltipPrimitive.Portal container={container}>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            'relative overflow-visible bg-background-tooltip text-primary text-xs font-medium rounded-lg border border-border-normal px-3 py-2 filter-[drop-shadow(0_2px_4px_rgba(0,0,0,0.10))_drop-shadow(0_4px_6px_rgba(0,0,0,0.10))] inline-flex items-center gap-1.5 has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm z-50 w-fit max-w-xs origin-(--transform-origin)',
            popupTransitionStyle,
            className
          )}
          {...props}
        >
          {showArrow ? <TooltipArrow /> : null}
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

interface TooltipHelperProps {
  align?: 'center' | 'end' | 'start'
  alignOffset?: number
  delay?: number
  disabled?: boolean
  message: ReactNode
  showArrow?: boolean
  side?: 'top' | 'bottom' | 'left' | 'right'
  sideOffset?: number
}

const TooltipHelper = (props: PropsWithChildren<TooltipHelperProps>) => {
  const {
    align = 'center',
    alignOffset = 0,
    children,
    delay = 0,
    disabled = false,
    message,
    showArrow = true,
    side = 'top',
    sideOffset = 4,
  } = props

  const { container } = useTheme()

  return disabled ? (
    children
  ) : (
    <Tooltip disabled={disabled}>
      <TooltipTrigger
        delay={delay}
        render={
          isValidElement(children) ? (
            (children as ReactElement)
          ) : (
            <span>{children}</span>
          )
        }
      />
      <TooltipContent
        align={align}
        alignOffset={alignOffset}
        container={container}
        showArrow={showArrow}
        side={side}
        sideOffset={sideOffset}
      >
        {message}
      </TooltipContent>
    </Tooltip>
  )
}

Tooltip.Helper = TooltipHelper

export {
  Tooltip,
  TooltipContent,
  TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger,
}
