import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, ReactNode } from 'react'

import { Field, type FieldProps } from '~/components/Field/index.js'
import { textVariants } from '~/components/Text/index.js'
import { cn } from '~/utils/classnames.js'

const textareaVariants = cva(
  [
    textVariants({ variant: 'normal' }),
    'block bg-transparent text-primary w-full p-4 rounded-xl',
    'outline-hidden ring-inset ring-1 ring-border-normal',
    'cursor-text disabled:cursor-default disabled:opacity-50',
    'focus:opacity-100 focus:ring-2 focus:ring-border-focus',
    'placeholder-muted',
    'resize-none',
  ],
  {
    variants: {
      resize: {
        true: 'resize-y',
        false: 'resize-none',
      },
    },
    defaultVariants: {
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
      description,
      disabled = false,
      id,
      label = '',
      labelLocation = 'hidden',
      name,
      rows,
      resize = false,
      className,
      error,
      trailDescription,
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
        <textarea
          autoComplete={autoComplete}
          spellCheck="false"
          className={cn(
            textareaVariants({ resize }),
            className,
            error && 'ring-border-error focus:ring-border-error'
          )}
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
