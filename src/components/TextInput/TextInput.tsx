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
      leftIcon,
      rightIcon,
      ...boxProps
    } = props
    return (
      <LabelledField label={label} labelLocation={labelLocation}>
        <Box className={styles.wrap}>
          <Box as="span" className={styles.leftIcon}>
            {leftIcon}
          </Box>

          <Box
            as={as}
            type={type}
            className={styles.input}
            disabled={disabled || processing}
            ref={ref}
            paddingLeft={leftIcon ? 'xxloose' : 'normal'}
            paddingRight={rightIcon ? 'xxloose' : 'normal'}
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
