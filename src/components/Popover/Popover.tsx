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
          className
        )}
        {...rest}
      />
    </PopoverPrimitive.Portal>
  )
}

export { PopoverPrimitive }
