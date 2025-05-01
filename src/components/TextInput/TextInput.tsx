import { cva } from 'class-variance-authority'
import { forwardRef, type ComponentType, type ReactNode } from 'react'

import { Field, type FieldProps } from '~/components/Field/index.js'
import { textVariants } from '~/components/Text/index.js'
import type { IconProps } from '~/icons/types.js'
import { cn } from '~/utils/classnames.js'

const inputVariants = cva(
  [
    'block bg-transparent text-primary border-none px-0 py-4 w-full h-full placeholder-muted',
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
    FieldProps {
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
      trailDescription,
      error,
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
        trailDescription={trailDescription}
        error={error}
      >
        <div className="w-full">
          <div
            className={cn(
              'inline-flex items-center bg-transparent text-primary min-w-full px-4 gap-2 rounded-xl',
              'h-[52px] cursor-text',
              'ring-inset ring-1 ring-border-normal focus-within:ring-2 focus-within:ring-border-focus focus-within:opacity-100',
              error
                ? 'ring-border-error focus-within:ring-border-error'
                : 'ring-border-normal focus-within:ring-border-focus',
              {
                'cursor-default opacity-50': disabled,
              }
            )}
          >
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
