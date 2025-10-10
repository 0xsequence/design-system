import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '~/utils/classnames.js'

export const PopoverRoot = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverClose = PopoverPrimitive.Close
export const PopoverAnchor = PopoverPrimitive.Anchor

export const PopoverContent = (props: PopoverPrimitive.PopoverContentProps) => {
  const { className, ...rest } = props
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className={cn(
          'shadow-primary rounded-2xl bg-background-primary border-1 border-border-normal',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
          className
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  )
}

export { PopoverPrimitive }
