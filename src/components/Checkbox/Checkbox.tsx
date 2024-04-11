import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { forwardRef, Ref } from 'react'

import { Field, FieldProps } from '~/components/Field'
import { CheckmarkIcon } from '~/icons'

import { checkboxVariants, CheckboxVariants, indicator } from './styles.css'

export type CheckboxProps = FieldProps &
  CheckboxVariants &
  CheckboxPrimitive.CheckboxProps & {
    disabled?: boolean
    id?: string
  }

type IndicatorProps = CheckboxVariants & {}

const Indicator = ({ size = 'sm' }: IndicatorProps) => (
  <CheckboxPrimitive.Indicator className={indicator}>
    <CheckmarkIcon size={size === 'lg' ? 'sm' : 'xs'} />
  </CheckboxPrimitive.Indicator>
)

export const Checkbox = forwardRef(
  (props: CheckboxProps, ref: Ref<HTMLButtonElement>) => {
    const {
      disabled = false,
      id,
      name,
      label = '',
      labelLocation = 'left',
      size = 'sm',
      ...rest
    } = props

    return (
      <Field
        disabled={disabled}
        display="flex"
        id={id ?? name}
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
          {...rest}
        >
          <Indicator size={size} />
        </CheckboxPrimitive.Root>
      </Field>
    )
  }
)
