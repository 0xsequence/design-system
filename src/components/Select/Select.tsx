import * as SelectPrimitive from '@radix-ui/react-select'
import { forwardRef, type ReactNode, type Ref } from 'react'

import { Field, type FieldProps } from '~/components/Field/index.js'
import { textVariants } from '~/components/Text/index.js'
import { useTheme } from '~/components/ThemeProvider/index.js'
import { ChevronDownIcon } from '~/icons/index.js'
import { disabledStyle, focusRingVariants, inputBorderStyle } from '~/styles.js'
import { cn } from '~/utils/classnames.js'

type SelectOption = {
  className?: string
  disabled?: boolean
  label: string | ReactNode
  value: string
}

type Direction = 'ltr' | 'rtl'

// XXX This is a copy of SelectSharedProps from the Radix UI Select component
// Which is not exported by the library which causes errors
interface SelectPrimitiveProps {
  // SelectSharedProps
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?(open: boolean): void
  dir?: Direction
  name?: string
  autoComplete?: string
  disabled?: boolean
  required?: boolean
  form?: string

  // SelectProps
  value?: string
  defaultValue?: string
  onValueChange?(value: string): void
}

export type SelectProps = FieldProps &
  SelectPrimitiveProps & {
    placeholder?: string
    options: SelectOption[]
    className?: string
  }

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
              'inline-flex items-center justify-between gap-1 p-4 h-[52px] bg-background-input rounded-xl',
              'text-base font-medium text-primary select-none cursor-pointer',
              focusRingVariants({ error: !!error }),
              inputBorderStyle,
              disabledStyle,
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
      </Field>
    )
  }
)

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
          'data-highlighted:bg-background-active/33 data-[state=checked]:bg-background-active outline-hidden',
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
