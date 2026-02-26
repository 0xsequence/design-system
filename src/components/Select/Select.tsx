import { Select as SelectPrimitive } from '@base-ui/react'
import { type ComponentProps, type ReactNode } from 'react'

import {
  CheckmarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '../../icons/index.js'
import { useTheme } from '../../providers/ThemeProvider/ThemeProvider.js'
import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from '../../styles.js'
import { cn } from '../../utils/classnames.js'
import { textVariants } from '../Text/Text.js'

function Select({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default'
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        textVariants({ variant: 'normal' }),
        focusRingVariants(),
        inputBorderStyle,
        disabledStyle,
        'bg-background-input text-primary select-none cursor-pointer data-[placeholder]:text-muted flex w-fit items-center justify-between gap-2 rounded-xl px-4 py-2 whitespace-nowrap data-[size=default]:h-13 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',
        "[&_svg:not([class*='text-'])]:text-muted [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        'aria-invalid:border-destructive aria-invalid:outline-destructive',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={<ChevronDownIcon className="size-4 text-muted" />}
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = 'popper',
  align = 'center',
  side,
  sideOffset,
  alignOffset,
  ...props
}: ComponentProps<typeof SelectPrimitive.Popup> &
  Pick<
    ComponentProps<typeof SelectPrimitive.Positioner>,
    'align' | 'side' | 'sideOffset' | 'alignOffset'
  > & {
    position?: 'popper' | 'item-aligned'
  }) {
  const { container } = useTheme()

  return (
    <SelectPrimitive.Portal container={container}>
      <SelectPrimitive.Positioner
        side={side ?? 'bottom'}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        alignItemWithTrigger={position === 'item-aligned'}
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            'bg-background-raised text-primary relative max-h-(--available-height) min-w-[8rem] origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-border-normal shadow-primary',
            'data-[open]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[open]:fade-in-0 data-[closed]:zoom-out-95 data-[open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className
          )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-(--anchor-height) w-full min-w-(--anchor-width) scroll-my-1'
            )}
          >
            {children}
          </SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.GroupLabel>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn(
        textVariants({ variant: 'small' }),
        'text-muted px-2 py-1.5',
        className
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        textVariants({ variant: 'normal' }),
        "[&_svg:not([class*='text-'])]:text-muted relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        'focus:bg-background-hover data-highlighted:bg-background-hover',
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckmarkIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownArrow>
  )
}

type SelectHelperProps = ComponentProps<typeof Select> & {
  placeholder?: string
  options: SelectOption[]
  className?: string
  ref?: ComponentProps<typeof SelectPrimitive.Trigger>['ref']
  id?: string
  'aria-invalid'?: boolean
}

type SelectOption = {
  className?: string
  disabled?: boolean
  label: string | ReactNode
  value: string
}

const SelectHelper = (props: SelectHelperProps) => {
  const {
    disabled = false,
    id,
    name,
    options,
    placeholder,
    className,
    ref,
    'aria-invalid': ariaInvalid,
    ...rest
  } = props

  return (
    <Select disabled={disabled} name={name} {...rest}>
      <SelectTrigger
        className={className}
        id={id ?? name}
        aria-invalid={ariaInvalid}
        ref={ref}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent position="popper" side="bottom" align="start">
        <SelectGroup>
          {options.map(({ value, label, ...rest }) => (
            <SelectItem key={value} value={value} {...rest}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

Select.Helper = SelectHelper

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPrimitive,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
