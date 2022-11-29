import { createElement, ElementType } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { Box, PolymorphicComponent, PolymorphicProps } from '~/components/Box'

type FormProps = {
  onSubmit: SubmitHandler<FieldValues>
  defaultValues?: FieldValues
}

export const Form: PolymorphicComponent<FormProps, 'form'> = <
  T extends ElementType
>({
  children,
  defaultValues,
  onSubmit,
  ...rest
}: PolymorphicProps<FormProps, T>) => {
  const { handleSubmit, register } = useForm({ defaultValues })

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} {...rest}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name
              ? createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child
          })
        : children}
    </Box>
  )
}
