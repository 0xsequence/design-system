import { type ComponentProps } from 'react'

import { cn } from '../../utils/classnames.js'

export const VisuallyHidden = ({
  className,
  ...props
}: ComponentProps<'span'>) => (
  <span className={cn('sr-only', className)} {...props} />
)
