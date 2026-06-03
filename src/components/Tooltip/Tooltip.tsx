import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip'
import {
  isValidElement,
  type CSSProperties,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from 'react'

import { useTheme } from '../../providers/ThemeProvider/ThemeProvider.js'
import { popupTransitionStyle } from '../../styles.js'
import { cn } from '../../utils/classnames.js'

const TOOLTIP_ARROW_WIDTH = 12
const TOOLTIP_ARROW_HEIGHT = 6
/** Match popup `border` so the arrow base overlaps the outer edge. */
const TOOLTIP_BORDER_WIDTH = 1
/** Tuned per side so the SVG base meets the border without a visible gap. */
const TOOLTIP_ARROW_OUTSET_Y =
  TOOLTIP_ARROW_HEIGHT + TOOLTIP_BORDER_WIDTH - 1
const TOOLTIP_ARROW_OUTSET_X = TOOLTIP_ARROW_WIDTH - 3
/** Inset from the popup corner when align is start/end (center uses Floating UI). */
const TOOLTIP_ARROW_ALIGN_INSET = 8

/** Default shape points down (tooltip placed above the anchor). */
function TooltipArrowSvg() {
  return (
    <svg
      width={TOOLTIP_ARROW_WIDTH}
      height={TOOLTIP_ARROW_HEIGHT}
      viewBox={`0 0 ${TOOLTIP_ARROW_WIDTH} ${TOOLTIP_ARROW_HEIGHT}`}
      aria-hidden
      className="block h-full w-full"
    >
      <path d="M1 0 L6 6 L11 0 Z" className="fill-slate-50" />
      <path
        d="M1 0.5 L6 5.5 L11 0.5"
        fill="none"
        className="stroke-border-normal"
        strokeWidth={1}
        strokeLinejoin="round"
      />
    </svg>
  )
}

function tooltipArrowEdgeStyle(
  side: TooltipPrimitive.Arrow.State['side']
): CSSProperties {
  switch (side) {
    case 'top':
      return { top: 'auto', bottom: -TOOLTIP_ARROW_OUTSET_Y }
    case 'bottom':
      return { bottom: 'auto', top: -TOOLTIP_ARROW_OUTSET_Y }
    case 'left':
    case 'inline-start':
      return { left: 'auto', right: -TOOLTIP_ARROW_OUTSET_X }
    case 'right':
    case 'inline-end':
      return { right: 'auto', left: -TOOLTIP_ARROW_OUTSET_X }
    default:
      return {}
  }
}

/** Pin start/end along the popup edge; center keeps Floating UI anchor tracking. */
function tooltipArrowAlignStyle(
  side: TooltipPrimitive.Arrow.State['side'],
  align: TooltipPrimitive.Arrow.State['align']
): CSSProperties {
  if (align === 'center') {
    return {}
  }

  const inset = TOOLTIP_ARROW_ALIGN_INSET

  switch (side) {
    case 'top':
    case 'bottom':
      return align === 'start'
        ? { left: inset, right: 'auto' }
        : { right: inset, left: 'auto' }
    case 'left':
    case 'inline-start':
      return align === 'start'
        ? { top: inset, bottom: 'auto' }
        : { bottom: inset, top: 'auto' }
    case 'right':
    case 'inline-end':
      return align === 'start'
        ? { top: inset, bottom: 'auto' }
        : { bottom: inset, top: 'auto' }
    default:
      return {}
  }
}

function tooltipArrowStyle(
  side: TooltipPrimitive.Arrow.State['side'],
  align: TooltipPrimitive.Arrow.State['align']
): CSSProperties {
  return {
    ...tooltipArrowEdgeStyle(side),
    ...tooltipArrowAlignStyle(side, align),
  }
}

function tooltipArrowClassName(state: TooltipPrimitive.Arrow.State) {
  const { side } = state

  return cn(
    'pointer-events-none block h-1.5 w-3 origin-center',
    side === 'bottom' && 'rotate-180',
    (side === 'left' || side === 'inline-start') && '-rotate-90',
    (side === 'right' || side === 'inline-end') && 'rotate-90'
  )
}

function TooltipProvider({
  delay = 250,
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

function TooltipContent({
  className,
  side = 'top',
  sideOffset = 4,
  align = 'center',
  alignOffset = 0,
  children,
  container,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  > &
  Pick<TooltipPrimitive.Portal.Props, 'container'>) {
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
            'relative overflow-visible bg-slate-50 text-primary text-xs font-medium rounded-lg border border-border-normal px-3 py-2 filter-[drop-shadow(0_2px_4px_rgba(0,0,0,0.10))_drop-shadow(0_4px_6px_rgba(0,0,0,0.10))] inline-flex items-center gap-1.5 has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm z-50 w-fit max-w-xs origin-(--transform-origin)',
            popupTransitionStyle,
            className
          )}
          {...props}
        >
          <TooltipPrimitive.Arrow
            className={tooltipArrowClassName}
            style={state => tooltipArrowStyle(state.side, state.align)}
          >
            <TooltipArrowSvg />
          </TooltipPrimitive.Arrow>
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

interface TooltipHelperProps {
  align?: 'center' | 'end' | 'start'
  delay?: number
  disabled?: boolean
  hOffset?: number
  message: ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  vOffset?: number
}

const TooltipHelper = (props: PropsWithChildren<TooltipHelperProps>) => {
  const {
    align = 'center',
    children,
    delay = 250,
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
    <TooltipProvider delay={delay}>
      <Tooltip disabled={disabled}>
        <TooltipTrigger
          render={
            isValidElement(children) ? (
              (children as ReactElement)
            ) : (
              <span>{children}</span>
            )
          }
        />
        <TooltipContent
          container={container}
          side={side}
          align={align}
          sideOffset={vOffset}
          alignOffset={hOffset}
        >
          {message}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

Tooltip.Helper = TooltipHelper

export {
  Tooltip,
  TooltipContent,
  TooltipPrimitive,
  TooltipProvider,
  TooltipTrigger
}

