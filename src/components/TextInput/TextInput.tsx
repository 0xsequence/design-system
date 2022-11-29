import { ComponentType, ElementType, forwardRef } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

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

type TextInputProps = (HasLabel | HiddenLabel) & {
  disabled?: boolean
  LeftIcon?: ComponentType<IconProps>
  name: string
  register?: UseFormRegister<any>
  processing?: boolean
  RightIcon?: ComponentType<IconProps>
  rules?: RegisterOptions
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
        disabled = false,
        id,
        label = '',
        labelLocation = 'hidden',
        LeftIcon,
        name,
        processing = false,
        register,
        RightIcon,
        rules = {},
        type = 'text',
        ...rest
      } = props

      const registerProps = !register ? { ref: null } : register(name, rules)
      const { ref: registerRef, ...restRegisterProps } = registerProps

      return (
        <LabelledField
          forId={id ?? name}
          label={label}
          labelLocation={labelLocation}
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
              ref={e => {
                if (registerRef) {
                  registerRef(e)
                }
                if (ref?.current) {
                  ref.current = e
                }
              }}
              type={type}
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
