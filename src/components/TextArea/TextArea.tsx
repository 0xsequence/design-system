import { clsx } from 'clsx'
import { ElementType, forwardRef, ReactNode } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Field, FieldProps } from '~/components/Field'

import * as styles from './styles.css'

export type TextAreaProps = FieldProps & {
  disabled?: boolean
  name: string
  controls?: ReactNode
  value?: string
  rows?: number
  resize?: boolean
}

export const TextArea: PolymorphicComponent<TextAreaProps, 'textarea'> =
  forwardRef(
    <T extends ElementType>(
      props: PolymorphicProps<TextAreaProps, T>,
      ref: PolymorphicRef<T>
    ) => {
      const {
        as = 'textarea',
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
        ...rest
      } = props

      return (
        <Field
          description={description}
          disabled={disabled}
          display="grid"
          id={id ?? name}
          label={label}
          labelLocation={labelLocation}
        >
          <Box
            as={as}
            autoComplete={autoComplete}
            spellCheck="false"
            className={clsx(styles.textarea, resize && styles.resize)}
            disabled={disabled}
            id={id ?? name}
            name={name}
            ref={ref}
            rows={rows}
            borderRadius={borderRadius}
            {...rest}
          />
        </Field>
      )
    }
  )
