import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

import { CheckmarkIcon } from '../../icons/index.js'
import { cn } from '../../utils/classnames.js'
import { Divider } from '../Divider/Divider.js'
import { Text } from '../Text/Text.js'

export { DropdownMenuPrimitive }

export const DropdownMenu = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal

export const DropdownMenuContent = ({
  className,
  children,
  ...rest
}: DropdownMenuPrimitive.DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className={cn(
        'w-40 bg-background-secondary border-1 border-border-normal shadow-primary p-1 rounded-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto',
        className
      )}
      side="bottom"
      sideOffset={4}
      align="center"
      {...rest}
    >
      {children}
      {/* <DropdownMenuArrow /> */}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
)

// const DropdownMenuArrow = () => (
//   <DropdownMenuPrimitive.Arrow className="fill-background-raised" />
// )

export const DropdownMenuItem = ({
  className,
  children,
  ...rest
}: DropdownMenuPrimitive.DropdownMenuItemProps) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      'flex items-center justify-between rounded-xs px-2 py-1 cursor-pointer select-none pl-6 relative text-secondary outline-hidden',
      'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-muted',
      'data-highlighted:bg-background-primary',
      className
    )}
    {...rest}
  >
    <Text variant="small">{children}</Text>
  </DropdownMenuPrimitive.Item>
)

const DropdownMenuItemIndicator = ({
  children,
}: DropdownMenuPrimitive.DropdownMenuItemIndicatorProps) => (
  <DropdownMenuPrimitive.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
    {children}
  </DropdownMenuPrimitive.ItemIndicator>
)

export const DropdownMenuSeparator = () => (
  <DropdownMenuPrimitive.Separator asChild>
    <Divider className="-mx-1 my-1" />
  </DropdownMenuPrimitive.Separator>
)

export const DropdownMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps
>(({ className, children, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={cn(
      'flex items-center justify-between rounded-xs px-2 py-1 cursor-pointer select-none pl-6 relative text-secondary outline-hidden',
      'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-muted',
      'data-highlighted:bg-background-primary',
      className
    )}
    {...rest}
    ref={forwardedRef}
  >
    <DropdownMenuItemIndicator>
      <CheckmarkIcon size="xxs" />
    </DropdownMenuItemIndicator>
    <Text variant="small">{children}</Text>
  </DropdownMenuPrimitive.CheckboxItem>
))

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuRadioItem = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuRadioItemProps
>(({ className, children, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      'flex items-center justify-between rounded-xs px-2 py-1 cursor-pointer select-none pl-6 relative text-secondary outline-hidden',
      'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-muted',
      'data-highlighted:bg-background-primary',
      className
    )}
    {...rest}
    ref={forwardedRef}
  >
    <DropdownMenuPrimitive.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-primary" />
    </DropdownMenuPrimitive.ItemIndicator>
    <Text variant="small">{children}</Text>
  </DropdownMenuPrimitive.RadioItem>
))
