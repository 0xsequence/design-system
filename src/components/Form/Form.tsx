import { ElementType } from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form'

import { Box, PolymorphicComponent, PolymorphicProps } from '~/components/Box'

type FormProps = {
  onSubmit: SubmitHandler<FieldValues>
}

export const Form: PolymorphicComponent<FormProps, 'form'> = <
  T extends ElementType
>({
  children,
  onSubmit,
  ...rest
}: PolymorphicProps<FormProps, T>) => {
  const methods = useForm()
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} {...rest}>
        {children}
      </Box>
    </FormProvider>
  )
}
