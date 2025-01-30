import { cva, VariantProps } from 'class-variance-authority'
import { ComponentType, forwardRef, ReactNode } from 'react'

import { Field, FieldProps } from '~/components/Field'
import { IconProps } from '~/icons/types'
import { cn } from '~/utils'

import { textVariants } from '../Text'

const wrapperVariants = cva(
  [
    'inline-flex items-center bg-transparent text-primary min-w-full px-4 gap-2',
    'h-[52px] cursor-text',
    '[&:has(:disabled)]:cursor-default [&:has(:disabled)]:opacity-50',
    '[&:has(:disabled):hover]:cursor-default [&:has(:disabled):hover]:opacity-50',
    'ring-inset ring-1 ring-border-normal focus-within:ring-2 focus-within:ring-border-focus focus-within:opacity-100',
  ],
  {
    variants: {
      borderRadius: {
        xs: 'rounded-xs',
        sm: 'rounded-lg',
        md: 'rounded-xl',
      },
    },
    defaultVariants: {
      borderRadius: 'md',
    },
  }
)

const inputVariants = cva(
  [
    'block bg-transparent text-primary border-none px-0 py-4 w-full h-full placeholder-text-50',
    'focus:outline-hidden focus:ring-0',
  ],
  {
    variants: {
      numeric: {
        false: textVariants({ variant: 'normal' }),
        true: textVariants({ variant: 'large' }),
      },
    },
    defaultVariants: {
      numeric: false,
    },
  }
)

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    FieldProps,
    VariantProps<typeof wrapperVariants> {
  leftIcon?: ComponentType<IconProps>
  rightIcon?: ComponentType<IconProps>
  name: string
  numeric?: boolean
  controls?: ReactNode
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      autoComplete = 'off',
      borderRadius = 'md',
      description,
      disabled = false,
      id,
      label = '',
      labelLocation = 'hidden',
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      name,
      controls,
      type = 'text',
      numeric = false,
      className,
      ...rest
    } = props

    return (
      <Field
        description={description}
        disabled={disabled}
        id={id ?? name}
        label={label}
        labelLocation={labelLocation}
        className="grid"
      >
        <div className="w-full">
          <div className={cn(wrapperVariants({ borderRadius }))}>
            {LeftIcon && <LeftIcon size="sm" />}

            <input
              autoComplete={autoComplete}
              spellCheck="false"
              className={cn(inputVariants({ numeric }), className)}
              disabled={disabled}
              id={id ?? name}
              name={name}
              ref={ref}
              type={type}
              {...rest}
            />

            {RightIcon && <RightIcon size="sm" />}
            {controls}
          </div>
        </div>
      </Field>
    )
  }
)
