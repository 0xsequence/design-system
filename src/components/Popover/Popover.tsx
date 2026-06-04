import { Popover as PopoverPrimitive } from '@base-ui/react/popover'
import type { ComponentProps } from 'react'

import { popupTransitionStyle } from '../../styles.js'
import { cn } from '../../utils/classnames.js'

function Popover({ ...props }: ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  side,
  alignOffset,
  showArrow = false,
  children,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Popup> &
  Pick<
    ComponentProps<typeof PopoverPrimitive.Positioner>,
    'align' | 'side' | 'sideOffset' | 'alignOffset'
  > & {
    showArrow?: boolean
  }) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            'relative overflow-visible shadow-lg rounded-3xl bg-background-raised border border-border-normal',
            'w-72 origin-(--transform-origin) outline-hidden',
            popupTransitionStyle,
            className
          )}
          {...props}
        >
          {showArrow ? <PopoverArrow /> : null}
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

function PopoverArrow({
  className,
  ...props
}: ComponentProps<typeof PopoverPrimitive.Arrow>) {
  return (
    <PopoverPrimitive.Arrow
      data-slot="popover-arrow"
      className={cn(
        'pointer-events-none relative block h-1.5 w-3 overflow-clip',
        "before:absolute before:bottom-0 before:left-1/2 before:box-border before:block before:content-['']",
        'before:h-[calc(6px*sqrt(2))] before:w-[calc(6px*sqrt(2))]',
        'before:translate-x-[-50%] before:translate-y-1/2 before:rotate-45',
        'before:border before:border-border-normal before:bg-background-raised',
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

function PopoverClose({
  ...props
}: ComponentProps<typeof PopoverPrimitive.Close>) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />
}

export {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverPrimitive,
  PopoverTrigger,
}
