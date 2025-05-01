import { HTMLAttributes } from 'react'

import { cn } from '~/utils/classnames.js'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {}

export const Divider = (props: DividerProps) => {
  const { className, ...rest } = props

  return (
    <hr
      className={cn('my-4 h-px bg-border-normal border-none', className)}
      {...rest}
    />
  )
}
