import { ComponentType, ElementType, forwardRef } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { LabelledField } from '~/components/LabelledField'
import { IconProps } from '~/icons/types'

import * as styles from './styles.css'

type hiddenLabel = {
  label?: string
  labelLocation?: 'hidden'
}

type hasLabel = {
  label: string
  labelLocation: 'left' | 'top'
}

export type TextInputProps = (hasLabel | hiddenLabel) & {
  name?: string
  disabled?: boolean
  processing?: boolean
  placeholder?: string
  value?: string
  LeftIcon?: ComponentType<IconProps>
  RightIcon?: ComponentType<IconProps>
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
        RightIcon,
        type = 'text',
        ...boxProps
      } = props

      return (
        <LabelledField label={label} labelLocation={labelLocation} forId={id}>
          <Box className={styles.wrap}>
            {LeftIcon && <LeftIcon className={styles.leftIcon} />}

            <Box
              as={as}
              autoComplete={autoComplete}
              className={styles.input}
              disabled={disabled || processing}
              id={id}
              name={name}
              paddingLeft={LeftIcon ? '10' : '4'}
              paddingRight={RightIcon ? '10' : '4'}
              ref={ref}
              type={type}
              {...boxProps}
            />

            {RightIcon && <RightIcon className={styles.rightIcon} />}
          </Box>
        </LabelledField>
      )
    }
  )
