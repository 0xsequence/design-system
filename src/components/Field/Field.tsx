import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

import { Text } from '~/components/Text'
import { cn } from '~/utils'

const fieldVariants = cva('flex', {
  variants: {
    labelLocation: {
      top: ['flex-col', 'items-stretch', 'gap-3'],
      left: ['flex-row', 'items-center', 'gap-3', 'grid-cols-[1fr_2fr]'],
      right: ['flex-row', 'items-center', 'gap-3', 'grid-cols-[2fr_1fr]'],
      hidden: ['gap-0'],
    },
  },
})

export interface FieldProps extends VariantProps<typeof fieldVariants> {
  id?: string
  label?: string | ReactNode
  description?: string | ReactNode
  disabled?: boolean
  required?: boolean // TODO
  error?: string // TODO
  className?: string
  children?: ReactNode
}

// TODO: handle error text and secondary description label
// TODO: handle isRequired in label?

export const Field = (props: FieldProps) => {
  const {
    id,
    label,
    description,
    labelLocation = 'top',
    children,
    className,
    ...rest
  } = props

  const renderLabel = () =>
    label || description ? (
      <div className="flex flex-col gap-0.5">
        {label && (
          <Text
            variant="small"
            color="primary"
            hidden={labelLocation === 'hidden'}
          >
            {label}
          </Text>
        )}

        {description && (
          <Text
            variant="small"
            color="muted"
            hidden={labelLocation === 'hidden'}
          >
            {description}
          </Text>
        )}
      </div>
    ) : null

  return (
    <label
      className={cn(fieldVariants({ labelLocation }), className)}
      htmlFor={id}
      {...rest}
    >
      {['left', 'top', 'hidden'].includes(labelLocation!) && renderLabel()}
      {children}
      {labelLocation === 'right' && renderLabel()}
    </label>
  )
}
