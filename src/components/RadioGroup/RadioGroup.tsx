import * as RadioPrimitive from '@radix-ui/react-radio-group'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type Ref } from 'react'

import { Field } from '~/components/Field/index.js'
import { cn } from '~/utils/classnames.js'

const radioOptionVariants = cva(
  [
    'bg-background-input rounded-full p-0',
    'cursor-pointer hover:opacity-80 disabled:cursor-default disabled:opacity-50',
    'outline-hidden ring-inset ring-1 ring-border-normal focus-visible:ring-2 focus-visible:ring-border-focus',
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

const indicatorVariants = cva(
  [
    'flex items-center justify-center relative w-full h-full text-primary',
    'after:content-[""] after:block after:rounded-full after:bg-current',
  ],
  {
    variants: {
      size: {
        sm: 'after:w-3 after:h-3',
        lg: 'after:w-[18px] after:h-[18px]',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
)

type RadioOption = {
  label: string
  value: string
  disabled?: boolean
}

export type RadioGroupProps = VariantProps<typeof radioOptionVariants> &
  RadioPrimitive.RadioGroupProps & {
    disabled?: boolean
    name: string
    options: RadioOption[]
    className?: string
  }

type RadioOptionProps = VariantProps<typeof radioOptionVariants> & {
  id: string
  label: string
  value: string
  disabled?: boolean
}

const RadioOption = (props: RadioOptionProps) => {
  const { id, label, size = 'sm', value, disabled } = props

  return (
    <div className="flex items-center">
      <Field
        disabled={disabled}
        id={id}
        label={label}
        labelLocation="right"
        className="flex"
      >
        <RadioPrimitive.Item
          className={cn(radioOptionVariants({ size }))}
          value={value}
          id={id}
          disabled={disabled}
        >
          <RadioPrimitive.Indicator
            className={cn(indicatorVariants({ size }))}
          />
        </RadioPrimitive.Item>
      </Field>
    </div>
  )
}

export const RadioGroup = forwardRef(
  (props: RadioGroupProps, ref: Ref<HTMLDivElement>) => {
    const {
      disabled = false,
      name,
      options,
      size = 'sm',
      className,
      ...rest
    } = props

    return (
      <RadioPrimitive.Root
        className={cn('flex flex-col gap-2', className)}
        disabled={disabled}
        name={name}
        ref={ref}
        {...rest}
      >
        {options.map(({ label, value, disabled }) => (
          <RadioOption
            id={`${name}-${value}`}
            key={value}
            label={label}
            size={size}
            value={value}
            disabled={disabled}
          />
        ))}
      </RadioPrimitive.Root>
    )
  }
)
