import { cva } from 'class-variance-authority'
import { forwardRef, type ComponentType, type ReactNode } from 'react'

import { Field, type FieldProps } from '~/components/Field/Field.js'
import { textVariants } from '~/components/Text/Text.js'
import type { IconProps } from '~/icons/types.js'
import { focusRingVariants, inputBorderStyle } from '~/styles.js'
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
              'inline-flex items-center bg-background-input text-primary min-w-full px-4 gap-2 rounded-xl h-[52px] cursor-text',
              focusRingVariants({ variant: 'within', error: !!error }),
              inputBorderStyle,
              {
                'cursor-default opacity-50 hover:ring-border-normal!': disabled,
              },
              className
            )}
          >
            {LeftIcon && <LeftIcon size="sm" />}

            <input
              autoComplete={autoComplete}
              spellCheck="false"
              className={inputVariants({ numeric })}
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
