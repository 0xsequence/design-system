import type { ReactNode } from 'react'
import {
  useForm,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form'

type FormProps = {
  children: (methods: UseFormReturn) => ReactNode
  onSubmit: SubmitHandler<FieldValues>
  defaultValues?: FieldValues
}

export const Form = ({ children, defaultValues = {}, onSubmit }: FormProps) => {
  const methods = useForm({ defaultValues })

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  )
}
