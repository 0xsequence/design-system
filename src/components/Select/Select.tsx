import * as SelectPrimitive from '@radix-ui/react-select'
import { type ComponentProps, type ReactNode, type Ref } from 'react'

import { ChevronDownIcon } from '../../icons/index.js'
import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from '../../styles.js'
import { cn } from '../../utils/classnames.js'
import { textVariants } from '../Text/Text.js'
import { useTheme } from '../ThemeProvider/ThemeProvider.js'

type SelectOption = {
  className?: string
  disabled?: boolean
  label: string | ReactNode
  value: string
}

type SelectProps = ComponentProps<typeof SelectPrimitive.Root> & {
  placeholder?: string
  options: SelectOption[]
  className?: string
  ref?: Ref<HTMLButtonElement>
  id?: string
  'aria-invalid'?: boolean
}

export const Select = (props: SelectProps) => {
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

  const { container } = useTheme()

  return (
    <SelectPrimitive.Root disabled={disabled} name={name} {...rest}>
      <SelectPrimitive.Trigger
        id={id ?? name}
        className={cn(
          textVariants({ variant: 'normal' }),
          'inline-flex items-center justify-between gap-1 p-4 h-[52px] bg-background-input rounded-xl',
          'text-base font-medium text-primary select-none cursor-pointer',
          focusRingVariants(),
          inputBorderStyle,
          disabledStyle,
          'aria-invalid:border-destructive aria-invalid:outline-destructive',
          className
        )}
        aria-invalid={ariaInvalid}
        ref={ref}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className="inline-flex">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal container={container}>
        <SelectPrimitive.Content
          position="popper"
          side="bottom"
          align="start"
          className={cn(
            'mt-2 bg-background-raised shadow-primary',
            'min-w-[var(--radix-select-trigger-width)] rounded-lg',
            'overflow-hidden z-30 outline-hidden max-h-[360px] overflow-y-auto',
            'border-border-normal border-1'
          )}
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Group className="flex flex-col gap-0.5 p-1">
              {options.map(({ value, label, ...rest }) => (
                <SelectItem key={value} value={value} {...rest}>
                  {label}
                </SelectItem>
              ))}
            </SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

const SelectItem = ({
  children,
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.SelectItem>) => {
  return (
    <SelectPrimitive.Item
      className={cn(
        textVariants({ variant: 'normal' }),
        'flex justify-between items-center px-4 py-3 h-[52px] cursor-pointer rounded-sm',
        'text-base text-primary opacity-100 data-disabled:cursor-default data-disabled:opacity-50',
        'data-highlighted:bg-background-active/33 data-[state=checked]:bg-background-active outline-hidden',
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}
