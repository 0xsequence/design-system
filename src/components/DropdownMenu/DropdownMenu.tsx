import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type { ComponentProps } from 'react'

import { CheckmarkIcon } from '../../icons/index.js'
import { cn } from '../../utils/classnames.js'
import { Text, textVariants } from '../Text/Text.js'

export { DropdownMenuPrimitive }

function DropdownMenu({
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}
function DropdownMenuPortal({
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}
function DropdownMenuTrigger({
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

const DropdownMenuContent = ({
  className,
  children,
  sideOffset = 4,
  ...rest
}: ComponentProps<typeof DropdownMenuPrimitive.Content>) => (
  <DropdownMenuPortal>
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
  </DropdownMenuPortal>
)

function DropdownMenuGroup({
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        textVariants({ variant: 'small' }),
        'flex items-center justify-between rounded-sm px-2 py-2 cursor-pointer select-none relative text-secondary outline-hidden',
        'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-primary/50',
        'data-highlighted:bg-background-hover',
        className
      )}
      {...props}
    />
  )
}

const DropdownMenuItemIndicator = (
  props: ComponentProps<typeof DropdownMenuPrimitive.ItemIndicator>
) => (
  <DropdownMenuPrimitive.ItemIndicator
    className="absolute left-0 w-6 inline-flex items-center justify-center"
    {...props}
  />
)

function DropdownMenuSeparator({
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

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        textVariants({ variant: 'small-bold' }),
        'text-primary px-2 py-1.5 data-[inset]:pl-8',
        className
      )}
      {...props}
    />
  )
}

const DropdownMenuCheckboxItem = ({
  className,
  children,
  ...rest
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        'flex items-center justify-between rounded-sm px-2 py-2 cursor-pointer select-none pl-6 relative text-secondary outline-hidden',
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

function DropdownMenuRadioGroup({
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

const DropdownMenuRadioItem = ({
  className,
  children,
  ...rest
}: ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        'flex items-center justify-between rounded-sm px-2 py-2 cursor-pointer select-none pl-6 relative text-secondary outline-hidden',
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

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,

  // DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubTrigger,
  // DropdownMenuSubContent,
}
