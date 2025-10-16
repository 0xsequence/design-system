import { forwardRef } from 'react'

import { cn } from '../../utils/classnames.js'

interface StopClickPropagationProps {
  children?: React.ReactNode
  className?: string
}

export const StopClickPropagation = forwardRef<
  HTMLDivElement,
  StopClickPropagationProps
>((props, ref) => {
  const { children, className } = props

  return (
    <div
      ref={ref}
      className={cn('w-fit h-fit', className)}
      onClick={ev => {
        ev.preventDefault()
        ev.stopPropagation()
      }}
      onKeyDown={ev => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault()
          ev.stopPropagation()
        }
      }}
    >
      {children}
    </div>
  )
})
