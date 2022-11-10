import { forwardRef, Ref } from 'react'

import { Box } from '~/components/Box'
import { LabelledField } from '~/components/LabelledField'

import * as styles from './styles.css'
import { TextInputProps } from './types'

export const TextInput = forwardRef(
  <T extends 'input' | 'textarea'>(props: TextInputProps<T>, ref: Ref<T>) => {
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
      ...rest
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
            sx={{
              paddingLeft: leftIcon ? 'xxloose' : 'normal',
              paddingRight: rightIcon ? 'xxloose' : 'normal',
            }}
            {...rest}
          />

          <Box as="span" className={styles.rightIcon}>
            {rightIcon}
          </Box>
        </Box>
      </LabelledField>
    )
  }
)
