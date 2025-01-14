import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, Ref } from 'react'

import { Field, FieldProps } from '~/components/Field'
import { CheckmarkIcon } from '~/icons'
import { cn } from '~/utils'

const checkboxVariants = cva(
  [
    'flex items-center justify-center bg-transparent',
    'rounded cursor-pointer opacity-100 hover:opacity-80 disabled:opacity-50 disabled:cursor-default',
    'outline-none ring-inset ring-1 ring-border-focus focus-visible:ring-2 focus-visible:ring-border-focus',
  ],
  {
    variants: {
      size: {
        sm: 'h-5 w-5',
        lg: 'h-7 w-7',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
)

export type CheckboxProps = FieldProps &
  VariantProps<typeof checkboxVariants> &
  CheckboxPrimitive.CheckboxProps & {
    disabled?: boolean
    id?: string
  }

type IndicatorProps = VariantProps<typeof checkboxVariants>

const Indicator = ({ size = 'sm' }: IndicatorProps) => (
  <CheckboxPrimitive.Indicator className="flex items-center justify-center w-full h-full text-text-100">
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
      className,
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
          className={cn(checkboxVariants({ size }), className)}
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
