import { ComponentType, ElementType, forwardRef } from 'react'
import { RegisterOptions, useFormContext } from 'react-hook-form'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import {
  HasLabel,
  HiddenLabel,
  LabelledField,
} from '~/components/LabelledField'
import { IconProps } from '~/icons/types'

import * as styles from './styles.css'

export type TextInputProps = (HasLabel | HiddenLabel) & {
  disabled?: boolean
  LeftIcon?: ComponentType<IconProps>
  name: string
  registerWith?: RegisterOptions
  processing?: boolean
  RightIcon?: ComponentType<IconProps>
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
        id,
        disabled = false,
        label = '',
        labelLocation = 'hidden',
        LeftIcon,
        name,
        processing = false,
        registerWith = {},
        RightIcon,
        type = 'text',
        ...rest
      } = props

      const methods = useFormContext()
      const usingFormContext = methods !== null

      const registerProps = usingFormContext
        ? methods.register(name, registerWith)
        : { ref: null }

      const { ref: registerRef, ...restRegisterProps } = registerProps

      return (
        <LabelledField
          label={label}
          labelLocation={labelLocation}
          forId={id ?? name}
        >
          <Box className={styles.wrap}>
            {LeftIcon && (
              <Box display="flex" className={styles.leftIcon}>
                <LeftIcon size="sm" />
              </Box>
            )}

            <Box
              as={as}
              autoComplete={autoComplete}
              className={styles.input}
              disabled={disabled || processing}
              id={id ?? name}
              name={name}
              paddingLeft={LeftIcon ? '10' : '4'}
              paddingRight={RightIcon ? '10' : '4'}
              type={type}
              ref={e => {
                if (registerRef) {
                  registerRef(e)
                }
                if (ref?.current) {
                  ref.current = e
                }
              }}
              {...rest}
              {...restRegisterProps}
            />

            {RightIcon && (
              <Box display="flex" className={styles.rightIcon}>
                <RightIcon size="sm" />
              </Box>
            )}
          </Box>
        </LabelledField>
      )
    }
  )
