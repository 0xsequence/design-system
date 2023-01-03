import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'
import { forwardRef, Ref } from 'react'

import { Box } from '~/components/Box'
import { Field, FieldProps } from '~/components/Field'
import { ChevronDownIcon } from '~/icons'

import { contentStyle, optionStyle, triggerStyle } from './styles.css'

type SelectOption = {
  className?: string
  disabled?: boolean
  label: string
  value: string
}

export type SelectProps = FieldProps &
  SelectPrimitive.SelectProps & {
    disabled?: boolean
    id?: string
    name: string
    placeholder?: string
    processing?: boolean
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
      disabled = false,
      id,
      label = '',
      description,
      labelLocation = 'hidden',
      name,
      options,
      placeholder,
      processing = false,
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
        <SelectPrimitive.Root
          disabled={disabled || processing}
          name={name}
          {...rest}
        >
          <SelectPrimitive.Trigger
            id={id ?? name}
            className={triggerStyle}
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
                {/* <SelectPrimitive.Label className={groupLabelStyle}>
                <Text>{placeholder}</Text>
                <Box as={SelectPrimitive.Icon} display="inline-flex">
                  <ChevronDownIcon />
                </Box>
              </SelectPrimitive.Label> */}

                {options.map(({ value, label, ...rest }) => (
                  <SelectItem key={label} value={value} {...rest}>
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
