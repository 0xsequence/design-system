import { forwardRef, Ref } from 'react'

import { Box } from '~/components/Box'
import { LabelledField } from '~/components/LabelledField'

import * as styles from './styles.css'
import { TextInputProps } from './types'

export const TextInput = forwardRef(
  <T extends 'input' | 'textarea'>(props: TextInputProps<T>, ref: Ref<T>) => {
    const {
      as = 'input',
      disabled = false,
      processing = false,
      type = 'text',
      label = '',
      labelLocation = 'hidden',
      ...boxProps
    } = props
    return (
      <LabelledField label={label} labelLocation={labelLocation}>
        <Box
          as={as}
          type={type}
          className={styles.input}
          disabled={disabled || processing}
          ref={ref}
          {...boxProps}
        />
      </LabelledField>
    )
  }
)
