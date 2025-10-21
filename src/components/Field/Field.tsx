import { cva, type VariantProps } from 'class-variance-authority'
import { useMemo } from 'react'

import { cn } from '../../utils/classnames.js'
import { Label } from '../Label/Label.js'
import { Separator } from '../Separator/Separator.js'
import { textVariants } from '../Text/Text.js'

// const fieldVariants = cva('flex', {
//   variants: {
//     labelLocation: {
//       top: ['flex-col', 'items-stretch', 'gap-1'],
//       left: ['flex-row', 'items-center', 'gap-2', 'grid-cols-[1fr_2fr]'],
//       right: ['flex-row', 'items-center', 'gap-2', 'grid-cols-[2fr_1fr]'],
//       hidden: ['gap-0'],
//     },
//   },
// })

// export interface FieldProps extends VariantProps<typeof fieldVariants> {
//   id?: string
//   label?: string | ReactNode
//   description?: string | ReactNode
//   trailDescription?: string | ReactNode
//   disabled?: boolean
//   required?: boolean // TODO
//   error?: string // TODO
//   className?: string
//   children?: ReactNode
// }

// export const Field = (props: FieldProps) => {
//   const {
//     id,
//     label,
//     description,
//     trailDescription,
//     labelLocation = 'top',
//     error,
//     children,
//     className,
//     ...rest
//   } = props

//   const renderLabel = () =>
//     label || description ? (
//       <div className="flex flex-col gap-0.5">
//         {label && (
//           <Text
//             variant="small"
//             color="primary"
//             hidden={labelLocation === 'hidden'}
//           >
//             {label}
//           </Text>
//         )}

//         {description && (
//           <Text
//             variant="small"
//             color="muted"
//             hidden={labelLocation === 'hidden'}
//           >
//             {description}
//           </Text>
//         )}
//       </div>
//     ) : null

//   const renderTrailText = () =>
//     error || trailDescription ? (
//       <Text variant="small" color={error ? 'negative' : 'muted'}>
//         {error ? error : trailDescription}
//       </Text>
//     ) : null

//   return (
//     <label
//       className={cn(fieldVariants({ labelLocation }), className)}
//       htmlFor={id}
//       {...rest}
//     >
//       {['left', 'top', 'hidden'].includes(labelLocation!) && renderLabel()}

//       <div className="flex flex-col gap-1">
//         {children}
//         {renderTrailText()}
//       </div>

//       {labelLocation === 'right' && renderLabel()}
//     </label>
//   )
// }

function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        'flex flex-col gap-6',
        'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = 'legend',
  ...props
}: React.ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        textVariants({ variant: variant === 'legend' ? 'medium' : 'normal' }),
        'text-primary mb-3',
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        'group/field-group @container/field-group flex w-full flex-col gap-4 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4',
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  'group/field flex w-full gap-2 data-[invalid=true]:text-destructive',
  {
    variants: {
      orientation: {
        vertical: ['gap-1 flex-col [&>*]:w-full [&>.sr-only]:w-auto'],
        horizontal: [
          'flex-row items-center',
          '[&>[data-slot=field-label]]:flex-auto',
          'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
        responsive: [
          'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto',
          '@md/field-group:[&>[data-slot=field-label]]:flex-auto',
          '@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  }
)

function Field({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        'group/field-content flex flex-1 flex-col gap-1.5 leading-snug',
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        'group/field-label peer/field-label flex w-fit gap-2 group-data-[disabled=true]/field:opacity-50',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4',
        'has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary',
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        'flex w-fit items-center gap-2 text-sm font-medium group-data-[disabled=true]/field:opacity-50',
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        textVariants({ variant: 'normal' }),
        'text-muted group-has-[[data-orientation=horizontal]]/field:text-balance',
        'last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2',
        className
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors?.length) {
      return null
    }

    if (errors?.length == 1) {
      return errors[0]?.message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {errors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn(
        textVariants({ variant: 'small' }),
        'text-destructive',
        className
      )}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
}
