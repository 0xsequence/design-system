import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ReactNode } from 'react'

import { Field, type FieldProps } from '../Field/Field.js'
import { textVariants } from '../Text/Text.js'
import {
  disabledStyle,
  focusRingVariants,
  inputBorderStyle,
} from '../../styles.js'
import { cn } from '../../utils/classnames.js'

const textareaVariants = cva(
  [
    textVariants({ variant: 'normal' }),
    'block bg-background-input text-primary w-full p-4 rounded-xl cursor-text placeholder-muted resize-none',
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
            focusRingVariants({ error: !!error }),
            inputBorderStyle,
            disabledStyle,
            className
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
