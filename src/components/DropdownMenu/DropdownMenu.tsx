import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { CheckmarkIcon } from '~/icons'

import { Box } from '../Box'
import { Divider } from '../Divider'
import { Text } from '../Text'

import * as styles from './styles.css'

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
    className={clsx(styles.content, className)}
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
  <DropdownMenuPrimitive.Arrow className={styles.arrow} />
)

export const DropdownMenuItem = ({
  className,
  children,
  ...rest
}: DropdownMenuPrimitive.DropdownMenuItemProps) => (
  <DropdownMenuPrimitive.Item
    className={clsx(styles.item, className)}
    asChild
    {...rest}
  >
    <Box>
      <Text variant="small">{children}</Text>
    </Box>
  </DropdownMenuPrimitive.Item>
)

const DropdownMenuItemIndicator = ({
  children,
}: DropdownMenuPrimitive.DropdownMenuItemIndicatorProps) => (
  <DropdownMenuPrimitive.ItemIndicator className={styles.indicator}>
    {children}
  </DropdownMenuPrimitive.ItemIndicator>
)

export const DropdownMenuSeparator = () => (
  <DropdownMenuPrimitive.Separator className={styles.separator} asChild>
    <Divider marginTop="1" marginBottom="1" />
  </DropdownMenuPrimitive.Separator>
)

export const DropdownMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps
>(({ className, children, ...rest }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={clsx(styles.item, className)}
      {...rest}
      ref={forwardedRef}
    >
      <DropdownMenuItemIndicator>
        <CheckmarkIcon size="xs" />
      </DropdownMenuItemIndicator>
      <Text variant="small">{children}</Text>
    </DropdownMenuPrimitive.CheckboxItem>
  )
})

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuRadioItem = forwardRef<
  HTMLDivElement,
  DropdownMenuPrimitive.DropdownMenuRadioItemProps
>(({ className, children, ...rest }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={clsx(styles.item, className)}
      {...rest}
      ref={forwardedRef}
    >
      <DropdownMenuPrimitive.ItemIndicator className={styles.indicator}>
        <Text>•</Text>
      </DropdownMenuPrimitive.ItemIndicator>
      <Text variant="small">{children}</Text>
    </DropdownMenuPrimitive.RadioItem>
  )
})
