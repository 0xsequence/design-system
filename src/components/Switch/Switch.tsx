import * as SwitchPrimitive from '@radix-ui/react-switch'

import { Box } from '../Box'
import { Field, FieldProps } from '../Field'

import * as styles from './styles.css'

type SwitchProps = FieldProps & SwitchPrimitive.SwitchProps

export const Switch = (props: SwitchProps) => {
  const {
    disabled,
    label,
    labelLocation = 'left',
    description,
    id,
    name,
    ...rest
  } = props

  return (
    <Field
      disabled={disabled}
      display="flex"
      id={id ?? name}
      label={label}
      labelLocation={labelLocation}
      description={description}
      whiteSpace="nowrap"
    >
      <SwitchPrimitive.Root
        className={styles.root}
        disabled={disabled}
        {...rest}
      >
        <Box position="relative" width="full" height="full">
          <SwitchPrimitive.Thumb className={styles.thumb} />
        </Box>
      </SwitchPrimitive.Root>
    </Field>
  )
}
