import { ElementType, forwardRef, ReactNode } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { LabelledField } from '~/components/LabelledField'

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
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const TextInput: PolymorphicComponent<TextInputProps, 'input'> =
  forwardRef(
    <T extends ElementType>(
      props: PolymorphicProps<TextInputProps, T>,
      ref: PolymorphicRef<T>
    ) => {
      const {
        as = 'input',
        id,
        disabled = false,
        label = '',
        labelLocation = 'hidden',
        leftIcon,
        processing = false,
        rightIcon,
        type = 'text',
        ...boxProps
      } = props

      return (
        <LabelledField label={label} labelLocation={labelLocation} forId={id}>
          <Box className={styles.wrap}>
            <Box as="span" className={styles.leftIcon}>
              {leftIcon}
            </Box>

            <Box
              as={as}
              id={id}
              type={type}
              className={styles.input}
              disabled={disabled || processing}
              ref={ref}
              paddingLeft={leftIcon ? '10' : '4'}
              paddingRight={rightIcon ? '10' : '4'}
              {...boxProps}
            />

            <Box as="span" className={styles.rightIcon}>
              {rightIcon}
            </Box>
          </Box>
        </LabelledField>
      )
    }
  )
