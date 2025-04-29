import * as SelectPrimitive from '@radix-ui/react-select'
import { forwardRef, ReactNode, Ref } from 'react'

import { Field, FieldProps } from '~/components/Field'
import { ChevronDownIcon } from '~/icons'
import { cn } from '~/utils'

import { textVariants } from '../Text'
import { useTheme } from '../ThemeProvider'

type SelectOption = {
  className?: string
  disabled?: boolean
  label: string | ReactNode
  value: string
}

export type SelectProps = FieldProps &
  SelectPrimitive.SelectProps & {
    disabled?: boolean
    id?: string
    name: string
    placeholder?: string
    options: SelectOption[]
    className?: string
  }

const SelectItem = forwardRef(
  (
    { children, className, ...props }: SelectPrimitive.SelectItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <SelectPrimitive.Item
        className={cn(
          textVariants({ variant: 'normal' }),
          'flex justify-between items-center px-4 py-3 h-[52px] cursor-pointer rounded-sm',
          'text-base text-primary opacity-100 data-disabled:cursor-default data-disabled:opacity-50',
          'data-highlighted:bg-background-secondary data-[state=checked]:bg-background-control outline-hidden',
          className
        )}
        {...props}
        ref={ref}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)

export const Select = forwardRef(
  (props: SelectProps, ref: Ref<HTMLButtonElement>) => {
    const {
      disabled = false,
      id,
      label = '',
      description,
      labelLocation = 'hidden',
      name,
      options,
      placeholder,
      className,
      error,
      trailDescription,
      ...rest
    } = props

    const { container } = useTheme()

    return (
      <Field
        disabled={disabled}
        id={id ?? name}
        label={label}
        labelLocation={labelLocation}
        description={description}
        className="grid whitespace-nowrap"
        error={error}
        trailDescription={trailDescription}
      >
        <SelectPrimitive.Root disabled={disabled} name={name} {...rest}>
          <SelectPrimitive.Trigger
            id={id ?? name}
            className={cn(
              textVariants({ variant: 'normal' }),
              'inline-flex items-center justify-between gap-1 p-4 h-[52px] bg-transparent rounded-xl',
              'text-base font-medium text-primary select-none cursor-pointer border-none',
              'outline-hidden ring-inset ring-1 ring-border-normal focus-within:ring-2 focus-within:ring-border-focus focus-within:opacity-100',
              '[&:has(:disabled)]:cursor-default [&:has(:disabled)]:opacity-50',
              '[&:has(:disabled):hover]:cursor-default [&:has(:disabled):hover]:opacity-50',
              error && 'ring-border-error focus-within:ring-border-error',
              className
            )}
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
              className="mt-2 p-1 bg-background-backdrop backdrop-blur-md min-w-[var(--radix-select-trigger-width)] rounded-lg overflow-hidden z-30 outline-hidden ring-inset focus-within:ring-2 focus-within:ring-border-focus"
            >
              <SelectPrimitive.Viewport>
                <SelectPrimitive.Group className="flex flex-col gap-0.5">
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
      </Field>
    )
  }
)
