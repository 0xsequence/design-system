import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

import { CheckmarkIcon } from '~/icons'
import { cn } from '~/utils'

import { Divider } from '../Divider'
import { Text } from '../Text'

export { DropdownMenuPrimitive }

export const DropdownMenuRoot = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal

export const DropdownMenuContent = ({
  className,
  children,
  ...rest
}: DropdownMenuPrimitive.DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Content
    className={cn(
      'w-40 backdrop-blur bg-background-raised p-2 rounded-md',
      className
    )}
    side="bottom"
    sideOffset={4}
    align="center"
    {...rest}
  >
    {children}
    <DropdownMenuArrow />
  </DropdownMenuPrimitive.Content>
)

const DropdownMenuArrow = () => (
  <DropdownMenuPrimitive.Arrow className="fill-background-raised" />
)

export const DropdownMenuItem = ({
  className,
  children,
  ...rest
}: DropdownMenuPrimitive.DropdownMenuItemProps) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      'flex items-center justify-between rounded px-2 py-1 cursor-pointer select-none pl-6 relative text-text-80 outline-none',
      'data-[disabled]:opacity-80 data-[disabled]:cursor-default data-[disabled]:pointer-events-none data-[disabled]:text-text-50',
      'data-[highlighted]:bg-background-contrast',
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
    <Divider className="my-1" />
  </DropdownMenuPrimitive.Separator>
)

export const DropdownMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps
>(({ className, children, ...rest }, forwardedRef) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={cn(
      'flex items-center justify-between rounded px-2 py-1 cursor-pointer select-none pl-6 relative text-text-80 outline-none',
      'data-[disabled]:opacity-80 data-[disabled]:cursor-default data-[disabled]:pointer-events-none data-[disabled]:text-text-50',
      'data-[highlighted]:bg-background-contrast',
      className
    )}
    {...rest}
    ref={forwardedRef}
  >
    <DropdownMenuItemIndicator>
      <CheckmarkIcon size="xs" />
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
      'flex items-center justify-between rounded px-2 py-1 cursor-pointer select-none pl-6 relative text-text-80 outline-none',
      'data-[disabled]:opacity-80 data-[disabled]:cursor-default data-[disabled]:pointer-events-none data-[disabled]:text-text-50',
      'data-[highlighted]:bg-background-contrast',
      className
    )}
    {...rest}
    ref={forwardedRef}
  >
    <DropdownMenuPrimitive.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
      <Text>•</Text>
    </DropdownMenuPrimitive.ItemIndicator>
    <Text variant="small">{children}</Text>
  </DropdownMenuPrimitive.RadioItem>
))
