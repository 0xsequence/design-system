import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'
import { forwardRef, ReactNode, Ref } from 'react'

import { Box } from '~/components/Box'
import { Field, FieldProps } from '~/components/Field'
import { ChevronDownIcon } from '~/icons'

import {
  contentStyle,
  optionStyle,
  triggerStyle,
  TriggerVariants,
  triggerVariants,
} from './styles.css'

type SelectOption = {
  className?: string
  disabled?: boolean
  label: string | ReactNode
  value: string
}

export type SelectProps = FieldProps &
  TriggerVariants &
  SelectPrimitive.SelectProps & {
    disabled?: boolean
    id?: string
    name: string
    placeholder?: string
    options: SelectOption[]
  }

const SelectItem = forwardRef(
  (
    { children, className, ...props }: SelectPrimitive.SelectItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <SelectPrimitive.Item
        className={clsx(optionStyle, className)}
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
      ...rest
    } = props

    return (
      <Field
        disabled={disabled}
        display="grid"
        id={id ?? name}
        label={label}
        labelLocation={labelLocation}
        description={description}
        whiteSpace="nowrap"
      >
        <SelectPrimitive.Root disabled={disabled} name={name} {...rest}>
          <SelectPrimitive.Trigger
            id={id ?? name}
            className={clsx(triggerStyle, triggerVariants({ borderRadius }))}
            ref={ref}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <Box as={SelectPrimitive.Icon} display="inline-flex">
              <ChevronDownIcon />
            </Box>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Content className={contentStyle}>
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
