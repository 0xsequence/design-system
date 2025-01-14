import * as SelectPrimitive from '@radix-ui/react-select'
import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, ReactNode, Ref } from 'react'

import { Field, FieldProps } from '~/components/Field'
import { ChevronDownIcon } from '~/icons'
import { cn } from '~/utils'

import { textVariants } from '../Text'

const triggerVariants = cva(
  [
    textVariants({ variant: 'normal' }),
    'inline-flex items-center justify-between gap-1 p-4 h-[52px] bg-transparent',
    'text-base font-medium text-text-100 select-none cursor-pointer border-none',
    'outline-none ring-inset ring-1 ring-border-normal focus-within:ring-2 focus-within:ring-border-focus focus-within:opacity-100',
    '[&:has(:disabled)]:cursor-default [&:has(:disabled)]:opacity-50',
    '[&:has(:disabled):hover]:cursor-default [&:has(:disabled):hover]:opacity-50',
  ],
  {
    variants: {
      borderRadius: {
        xs: 'rounded',
        sm: 'rounded-lg',
        md: 'rounded-xl',
      },
    },
    defaultVariants: {
      borderRadius: 'md',
    },
  }
)

type SelectOption = {
  className?: string
  disabled?: boolean
  label: string | ReactNode
  value: string
}

export type SelectProps = FieldProps &
  VariantProps<typeof triggerVariants> &
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
          'flex justify-between items-center px-4 py-3 h-[52px] cursor-pointer',
          'text-base text-text-100 opacity-100 data-[disabled]:cursor-default data-[disabled]:opacity-50',
          'data-[highlighted]:bg-background-secondary data-[state=checked]:bg-background-control outline-none',
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
      borderRadius = 'md',
      disabled = false,
      id,
      label = '',
      description,
      labelLocation = 'hidden',
      name,
      options,
      placeholder,
      className,
      ...rest
    } = props

    return (
      <Field
        disabled={disabled}
        id={id ?? name}
        label={label}
        labelLocation={labelLocation}
        description={description}
        className="grid whitespace-nowrap"
      >
        <SelectPrimitive.Root disabled={disabled} name={name} {...rest}>
          <SelectPrimitive.Trigger
            id={id ?? name}
            className={cn(triggerVariants({ borderRadius }), className)}
            ref={ref}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon className="inline-flex">
              <ChevronDownIcon />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Content className="backdrop-blur bg-button-glass rounded-lg overflow-hidden z-30 outline-none ring-inset focus-within:ring-2 focus-within:ring-border-focus">
            <SelectPrimitive.Viewport>
              <SelectPrimitive.Group>
                {options.map(({ value, label, ...rest }) => (
                  <SelectItem key={value} value={value} {...rest}>
                    {label}
                  </SelectItem>
                ))}
              </SelectPrimitive.Group>
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Root>
      </Field>
    )
  }
)
