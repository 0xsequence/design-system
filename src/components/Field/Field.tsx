import { cva, VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

import { Text } from '~/components/Text/index.js'
import { cn } from '~/utils/classnames.js'

const fieldVariants = cva('flex', {
  variants: {
    labelLocation: {
      top: ['flex-col', 'items-stretch', 'gap-1'],
      left: ['flex-row', 'items-center', 'gap-2', 'grid-cols-[1fr_2fr]'],
      right: ['flex-row', 'items-center', 'gap-2', 'grid-cols-[2fr_1fr]'],
      hidden: ['gap-0'],
    },
  },
})

export interface FieldProps extends VariantProps<typeof fieldVariants> {
  id?: string
  label?: string | ReactNode
  description?: string | ReactNode
  trailDescription?: string | ReactNode
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
    trailDescription,
    labelLocation = 'top',
    error,
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

  const renderTrailText = () =>
    error || trailDescription ? (
      <Text variant="small" color={error ? 'negative' : 'muted'}>
        {error ? error : trailDescription}
      </Text>
    ) : null

  return (
    <label
      className={cn(fieldVariants({ labelLocation }), className)}
      htmlFor={id}
      {...rest}
    >
      {['left', 'top', 'hidden'].includes(labelLocation!) && renderLabel()}

      <div className="flex flex-col gap-1">
        {children}
        {renderTrailText()}
      </div>

      {labelLocation === 'right' && renderLabel()}
    </label>
  )
}
