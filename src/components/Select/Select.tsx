import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'
import { forwardRef, Ref } from 'react'

import { Box } from '~/components/Box'
import {
  HasLabel,
  HiddenLabel,
  LabelledField,
} from '~/components/LabelledField'
import { ChevronDownIcon } from '~/icons'

import { contentStyle, optionStyle, triggerStyle } from './styles.css'

type SelectOption = {
  className?: string
  disabled?: boolean
  label: string
  value: string
}

export type SelectProps = (HasLabel | HiddenLabel) &
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
  (
    {
      disabled = false,
      id,
      label = '',
      labelLocation = 'hidden',
      name,
      options,
      placeholder,
      processing = false,
      ...props
    }: SelectProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <LabelledField
      disabled={disabled}
      display="grid"
      forId={id ?? name}
      label={label}
      labelLocation={labelLocation}
      whiteSpace="nowrap"
    >
      <SelectPrimitive.Root
        disabled={disabled || processing}
        name={name}
        {...props}
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
    </LabelledField>
  )
)
