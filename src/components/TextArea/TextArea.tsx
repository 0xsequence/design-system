import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, ReactNode } from 'react'

import { Field, FieldProps } from '~/components/Field'
import { cn } from '~/utils'

import { textVariants } from '../Text'

const textareaVariants = cva(
  [
    textVariants({ variant: 'normal' }),
    'block bg-transparent text-text-100 w-full p-4',
    'outline-hidden ring-inset ring-1 ring-border-normal',
    'cursor-text disabled:cursor-default disabled:opacity-50',
    'focus:opacity-100 focus:ring-2 focus:ring-border-focus',
    'placeholder-text-50',
    'resize-none',
  ],
  {
    variants: {
      borderRadius: {
        xs: 'rounded-sm',
        sm: 'rounded-lg',
        md: 'rounded-xl',
      },
      resize: {
        true: 'resize-y',
        false: 'resize-none',
      },
    },
    defaultVariants: {
      borderRadius: 'md',
      resize: false,
    },
  }
)

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    FieldProps,
    VariantProps<typeof textareaVariants> {
  name: string
  controls?: ReactNode
  value?: string
  rows?: number
  resize?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      autoComplete = 'off',
      borderRadius = 'md',
      description,
      disabled = false,
      id,
      label = '',
      labelLocation = 'hidden',
      name,
      rows,
      resize = false,
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
        <textarea
          autoComplete={autoComplete}
          spellCheck="false"
          className={cn(textareaVariants({ borderRadius, resize }), className)}
          disabled={disabled}
          id={id ?? name}
          name={name}
          ref={ref}
          rows={rows}
          {...rest}
        />
      </Field>
    )
  }
)
