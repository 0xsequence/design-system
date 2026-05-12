import { Popover as PopoverPrimitive } from '@base-ui/react/popover'
import type { ComponentProps } from 'react'
import { popupTransitionStyle } from 'src/styles.js'

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
            'shadow-lg rounded-3xl bg-background-raised border border-border-normal',
            'w-72 origin-(--transform-origin) outline-hidden',
            popupTransitionStyle,
            className
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
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
