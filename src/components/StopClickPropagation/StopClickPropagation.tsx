import { type ComponentProps } from 'react'

import { cn } from '../../utils/classnames.js'

export const StopClickPropagation = (props: ComponentProps<'div'>) => {
  const { children, className, ref } = props

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
}
