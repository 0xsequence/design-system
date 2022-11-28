import * as SelectPrimitive from '@radix-ui/react-select'
import { ElementType, forwardRef, Ref } from 'react'

import { LabelledField } from '~/components/LabelledField'

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
  (props: SelectPrimitive.SelectProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <LabelledField label="Select" labelLocation="top">
        <SelectPrimitive.Root {...props}>
          <SelectPrimitive.Trigger ref={ref}>
            <SelectPrimitive.Value placeholder="Select a fruit…" />
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
