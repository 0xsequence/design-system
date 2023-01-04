import { ComponentType, ElementType, forwardRef, ReactNode } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Field, FieldProps } from '~/components/Field'
import { IconProps } from '~/icons/types'

import * as styles from './styles.css'

export type TextInputProps = FieldProps & {
  disabled?: boolean
  leftIcon?: ComponentType<IconProps>
  rightIcon?: ComponentType<IconProps>
  name: string
  controls?: ReactNode
  value?: string
}

export const TextInput: PolymorphicComponent<TextInputProps, 'input'> =
  forwardRef(
    <T extends ElementType>(
      props: PolymorphicProps<TextInputProps, T>,
      ref: PolymorphicRef<T>
    ) => {
      const {
        as = 'input',
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
          <Box width="full">
            <Box className={styles.wrap}>
              {LeftIcon && <LeftIcon size="sm" />}

              <Box
                as={as}
                autoComplete={autoComplete}
                spellCheck="false"
                className={styles.input}
                disabled={disabled}
                id={id ?? name}
                name={name}
                ref={ref}
                type={type}
                {...rest}
              />

              {RightIcon && <RightIcon size="sm" />}
              {controls}
            </Box>
          </Box>
        </Field>
      )
    }
  )
