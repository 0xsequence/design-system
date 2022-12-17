import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { forwardRef, Ref } from 'react'

import {
  HasLabel,
  HiddenLabel,
  LabelledField,
} from '~/components/LabelledField'
import { CheckmarkIcon } from '~/icons'

import {
  checkboxVariants,
  CheckboxVariants,
  indicatorVariants,
  IndicatorVariants,
} from './styles.css'

export type CheckboxProps = (HasLabel | HiddenLabel) &
  CheckboxVariants &
  CheckboxPrimitive.CheckboxProps & {
    disabled?: boolean
    id?: string
  }

type IndicatorProps = IndicatorVariants & {}

const Indicator = ({ size = 'sm' }: IndicatorProps) => (
  <CheckboxPrimitive.Indicator className={indicatorVariants({ size })}>
    <CheckmarkIcon size={size} />
  </CheckboxPrimitive.Indicator>
)

export const Checkbox = forwardRef(
  (
    {
      disabled = false,
      id,
      name,
      label = '',
      labelLocation = 'left',
      size = 'sm',
      ...props
    }: CheckboxProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <LabelledField
      disabled={disabled}
      display="flex"
      forId={id ?? name}
      label={label}
      labelLocation={labelLocation}
      whiteSpace="nowrap"
    >
      <CheckboxPrimitive.Root
        className={checkboxVariants({ size })}
        disabled={disabled}
        id={id ?? name}
        name={name}
        ref={ref}
        {...props}
      >
        <Indicator />
      </CheckboxPrimitive.Root>
    </LabelledField>
  )
)
