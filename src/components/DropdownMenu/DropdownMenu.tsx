import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { ComponentProps } from 'react'

import { CheckmarkIcon } from '../../icons/index.js'
import { cn } from '../../utils/classnames.js'
import { Text } from '../Text/Text.js'

export { DropdownMenuPrimitive }

export const DropdownMenu = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal

export const DropdownMenuContent = ({
  className,
  children,
  sideOffset = 4,
  ...rest
}: ComponentProps<typeof DropdownMenuPrimitive.Content>) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      data-slot="dropdown-menu-content"
      className={cn(
        'w-40 bg-background-raised border-1 border-border-normal shadow-primary p-1 rounded-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto',
        className
      )}
      sideOffset={sideOffset}
      {...rest}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
)

export const DropdownMenuItem = ({
  className,
  children,
  ...rest
}: ComponentProps<typeof DropdownMenuPrimitive.Item>) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      'flex items-center justify-between rounded-xs px-2 py-2 cursor-pointer select-none pl-6 relative text-secondary outline-hidden',
      'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-muted',
      'data-highlighted:bg-background-hover',
      className
    )}
    {...rest}
  >
    <Text variant="small">{children}</Text>
  </DropdownMenuPrimitive.Item>
)

const DropdownMenuItemIndicator = (
  props: ComponentProps<typeof DropdownMenuPrimitive.ItemIndicator>
) => (
  <DropdownMenuPrimitive.ItemIndicator
    className="absolute left-0 w-6 inline-flex items-center justify-center"
    {...props}
  />
)

export function DropdownMenuSeparator({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('bg-border-normal -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

export const DropdownMenuCheckboxItem = ({
  className,
  children,
  ...rest
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cn(
        'flex items-center justify-between rounded-xs px-2 py-2 cursor-pointer select-none pl-6 relative text-secondary outline-hidden',
        'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-muted',
        'data-highlighted:bg-background-hover',
        className
      )}
      {...rest}
    >
      <DropdownMenuItemIndicator>
        <CheckmarkIcon size="xxs" />
      </DropdownMenuItemIndicator>
      <Text variant="small">{children}</Text>
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuRadioItem = ({
  className,
  children,
  ...rest
}: ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        'flex items-center justify-between rounded-xs px-2 py-2 cursor-pointer select-none pl-6 relative text-secondary outline-hidden',
        'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-muted',
        'data-highlighted:bg-background-hover',
        className
      )}
      {...rest}
    >
      <DropdownMenuPrimitive.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </DropdownMenuPrimitive.ItemIndicator>
      <Text variant="small">{children}</Text>
    </DropdownMenuPrimitive.RadioItem>
  )
}
