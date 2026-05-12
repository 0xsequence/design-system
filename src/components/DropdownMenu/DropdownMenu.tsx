import { Menu as DropdownMenuPrimitive } from '@base-ui/react/menu'
import { CheckIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

import { popupContentStyle, popupTransitionStyle } from '../../styles.js'
import { cn } from '../../utils/classnames.js'

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
  align = 'center',
  alignOffset = 0,
  side = 'bottom',
  sideOffset = 4,
  className,
  children,
  ...props
}: DropdownMenuPrimitive.Popup.Props &
  Pick<
    DropdownMenuPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset'
  >) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Positioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      className="isolate z-50 outline-none"
    >
      <DropdownMenuPrimitive.Popup
        data-slot="dropdown-menu-content"
        className={cn(popupContentStyle, popupTransitionStyle, className)}
        {...props}
      >
        <div className="p-1 overflow-y-auto no-scrollbar max-h-(--available-height)">
          {children}
        </div>
      </DropdownMenuPrimitive.Popup>
    </DropdownMenuPrimitive.Positioner>
  </DropdownMenuPrimitive.Portal>
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
        'text-xs',
        'flex items-center justify-between rounded-sm px-2 py-2 cursor-pointer select-none relative text-primary outline-hidden',
        'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-primary/50',
        'data-highlighted:bg-background-hover',
        className
      )}
      {...props}
    />
  )
}

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
}: ComponentProps<typeof DropdownMenuPrimitive.GroupLabel> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Group>
      <DropdownMenuPrimitive.GroupLabel
        data-slot="dropdown-menu-label"
        data-inset={inset}
        className={cn(
          'text-xs font-bold',
          'text-primary px-2 py-1.5 data-inset:pl-8',
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Group>
  )
}

const DropdownMenuCheckboxItem = ({
  className,
  children,
  defaultIndicator = true,
  ...rest
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & {
  defaultIndicator?: boolean
}) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        'flex items-center justify-between rounded-sm px-2 py-2 cursor-pointer select-none  relative text-primary outline-hidden',
        'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-muted',
        'data-highlighted:bg-background-hover text-xs',
        className
      )}
      {...rest}
    >
      {defaultIndicator ? (
        <span
          className="pointer-events-none absolute right-2 flex items-center justify-center"
          data-slot="dropdown-menu-checkbox-item-indicator"
        >
          <DropdownMenuPrimitive.CheckboxItemIndicator>
            <CheckIcon className="size-4" />
          </DropdownMenuPrimitive.CheckboxItemIndicator>
        </span>
      ) : null}
      {children}
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
  defaultIndicator = true,
  ...rest
}: ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & {
  defaultIndicator?: boolean
}) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        'flex items-center justify-between rounded-sm px-2 py-2 cursor-pointer select-none relative text-primary outline-hidden text-xs',
        'data-disabled:opacity-80 data-disabled:cursor-default data-disabled:pointer-events-none data-disabled:text-muted',
        'data-highlighted:bg-background-hover',
        className
      )}
      {...rest}
    >
      {defaultIndicator ? (
        <span
          className="pointer-events-none absolute right-2 flex items-center justify-center"
          data-slot="dropdown-menu-radio-item-indicator"
        >
          <DropdownMenuPrimitive.RadioItemIndicator>
            <CheckIcon className="size-4" />
          </DropdownMenuPrimitive.RadioItemIndicator>
        </span>
      ) : null}
      {children}
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
}
