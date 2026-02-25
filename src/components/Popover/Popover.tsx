import { Popover as PopoverPrimitive } from '@base-ui/react'
import type { ComponentProps } from 'react'

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
  ...props
}: ComponentProps<typeof PopoverPrimitive.Popup> &
  Pick<
    ComponentProps<typeof PopoverPrimitive.Positioner>,
    'align' | 'side' | 'sideOffset' | 'alignOffset'
  >) {
  return (
    <PopoverPrimitive.Positioner
      side={side}
      align={align}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
    >
      <PopoverPrimitive.Popup
        data-slot="popover-content"
        className={cn(
          'shadow-primary rounded-2xl bg-background-raised border-1 border-border-normal',
          'data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--transform-origin) outline-hidden',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Positioner>
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
