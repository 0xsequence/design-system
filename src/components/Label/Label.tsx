import type { ComponentProps } from 'react'

import { cn } from '../../utils/classnames.js'
import { textVariants } from '../Text/Text.js'

function Label({ className, ...props }: ComponentProps<'label'>) {
  return (
    <label
      data-slot="label"
      className={cn(
        textVariants({ variant: 'normal' }),
        'text-primary flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

export { Label }
