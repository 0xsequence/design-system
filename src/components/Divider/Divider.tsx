import { HTMLAttributes } from 'react'

import { cn } from '~/utils'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  className?: string
}

export const Divider = (props: DividerProps) => {
  const { className, ...rest } = props

  return (
    <hr
      className={cn('my-4 h-px bg-border-normal border-none', className)}
      {...rest}
    />
  )
}
