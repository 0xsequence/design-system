import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

// import { CheckmarkIcon } from 'icons'

export const DropdownMenuRoot = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal
export const DropdownMenuContent = DropdownMenuPrimitive.Content
export const DropdownMenuArrow = DropdownMenuPrimitive.Arrow

export const DropdownMenuItem = DropdownMenuPrimitive.Item

export const DropdownMenuItemIndicator = DropdownMenuPrimitive.ItemIndicator

export const DropdownMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
      <DropdownMenuItemIndicator>
        {/* <CheckmarkIcon /> */}
      </DropdownMenuItemIndicator>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
})

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuRadioItem = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
      <DropdownMenuPrimitive.ItemIndicator>
        {/* <CheckmarkIcon /> */}
      </DropdownMenuPrimitive.ItemIndicator>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
})
