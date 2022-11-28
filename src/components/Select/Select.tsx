import * as SelectPrimitive from '@radix-ui/react-select'
import { forwardRef, Ref } from 'react'

import {
  HasLabel,
  HiddenLabel,
  LabelledField,
} from '~/components/LabelledField'

import * as styles from './styles.css'

type SelectOption = {
  label: string
  value: string
}

type SelectProps = (HasLabel | HiddenLabel) &
  SelectPrimitive.SelectProps & {
    id?: string
    placeholder?: string
    processing?: boolean
    options: SelectOption[]
  }

const SelectItem = forwardRef(
  (
    { children, ...props }: SelectPrimitive.SelectItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <SelectPrimitive.Item
        // className={classnames('SelectItem', className)}
        {...props}
        ref={ref}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className="SelectItemIndicator">
          Ch
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    )
  }
)

export const Select = forwardRef(
  (
    {
      autoComplete = 'off',
      disabled = false,
      id,
      label = '',
      labelLocation = 'hidden',
      name,
      placeholder,
      processing = false,
      ...props
    }: SelectProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <LabelledField
        forId={id ?? name}
        label={label}
        labelLocation={labelLocation}
        whiteSpace="nowrap"
      >
        <SelectPrimitive.Root
          autoComplete={autoComplete}
          disabled={disabled || processing}
          {...props}
        >
          <SelectPrimitive.Trigger className={styles.trigger} ref={ref}>
            <SelectPrimitive.Value placeholder={placeholder} />
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content>
              <SelectPrimitive.ScrollUpButton>
                Up
              </SelectPrimitive.ScrollUpButton>
              <SelectPrimitive.Viewport>
                <SelectPrimitive.Group>
                  <SelectPrimitive.Label className="SelectLabel">
                    Fruits
                  </SelectPrimitive.Label>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectPrimitive.Group>
              </SelectPrimitive.Viewport>
              <SelectPrimitive.ScrollDownButton>
                Down
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </LabelledField>
    )
  }
)
