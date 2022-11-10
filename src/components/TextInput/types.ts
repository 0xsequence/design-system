import { AllHTMLAttributes, ChangeEvent, EventHandler, ReactNode } from 'react'

import { BoxProps } from '~/components/Box'

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
} & (AsText | AsEmail | AsNumber)

type AsTextArea = {
  as: 'textarea'
  onChange?: EventHandler<ChangeEvent<HTMLTextAreaElement>>
  cols?: TextAreaProps['cols']
  rows?: TextAreaProps['rows']
  type: never
}

type hiddenLabel = {
  label?: string
  labelLocation?: 'hidden'
}

type hasLabel = {
  label: string
  labelLocation: 'left' | 'top'
}

export type TextInputProps<T extends 'input' | 'textarea' = 'input'> =
  BoxProps<T> &
    (AsInput | AsTextArea) &
    (hasLabel | hiddenLabel) & {
      name?: string
      disabled?: boolean
      processing?: boolean
      placeholder?: string
      value?: string
      leftIcon?: ReactNode
      rightIcon?: ReactNode
    }
