import {
  AllHTMLAttributes,
  ChangeEvent,
  EventHandler,
  forwardRef,
  ReactNode,
  Ref,
} from 'react'

import { Box, BoxProps } from '~/components/Box'
import { LabelledField } from '~/components/LabelledField'

import * as styles from './styles.css'

type InputProps = AllHTMLAttributes<HTMLInputElement>
type TextAreaProps = AllHTMLAttributes<HTMLTextAreaElement>

type AsText = {
  type?: 'text'
  maxLength?: InputProps['maxLength']
}

type AsEmail = {
  type: 'email'
}

type AsNumber = {
  type: 'number'
  max?: InputProps['max']
  min?: InputProps['min']
  step?: InputProps['step']
}

type AsInput = {
  as?: 'input'
  onChange?: EventHandler<ChangeEvent<HTMLInputElement>>
  leftIcon?: ReactNode
  rightIcon?: ReactNode
} & (AsText | AsEmail | AsNumber)

// TODO: fix types to make textarea work
type AsTextArea = {
  as: 'textarea'
  onChange?: EventHandler<ChangeEvent<HTMLTextAreaElement>>
  cols?: TextAreaProps['cols']
  rows?: TextAreaProps['rows']
  type: never
}

type TextInputProps<T extends 'input' | 'textarea' = 'input'> = Partial<
  Pick<
    BoxProps<T>,
    | 'as'
    | 'alignSelf'
    | 'justifySelf'
    | 'margin'
    | 'marginBottom'
    | 'marginLeft'
    | 'marginRight'
    | 'marginTop'
    | 'marginX'
    | 'marginY'
  >
> &
  (AsInput | AsTextArea) & {
    // AsInput & {
    name?: string
    disabled?: boolean
    labelLocation?: 'left' | 'top' | 'hidden'
    processing?: boolean
    placeholder?: string
  }

export const TextInput = forwardRef(
  <T extends 'input' | 'textarea'>(props: TextInputProps<T>, ref: Ref<T>) => {
    const {
      as = 'input',
      disabled = false,
      processing = false,
      type = 'text',
      labelLocation = 'hidden',
      ...boxProps
    } = props
    return (
      <LabelledField labelLocation={labelLocation}>
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