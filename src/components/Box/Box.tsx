import { createElement, forwardRef } from 'react'
import { clsx, ClassValue } from 'clsx'

import { atoms, Atoms } from '../../css'

type HTMLProperties = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'className' | 'color' | 'height' | 'width'>

type Props = Atoms &
  HTMLProperties & {
    as?: React.ElementType
    className?: ClassValue
  }

export const Box = forwardRef<HTMLElement, Props>(({ as = 'div', className, ...props }: Props, ref) => {
  const atomProps: Record<string, unknown> = {}
  const nativeProps: Record<string, unknown> = {}

  for (const key in props) {
    if (atoms.properties.has(key as keyof Atoms)) {
      atomProps[key] = props[key as keyof typeof props]
    } else {
      nativeProps[key] = props[key as keyof typeof props]
    }
  }

  const atomicClasses = atoms({
    ...atomProps
  })

  return createElement(as, {
    className: clsx(atomicClasses, className),
    ...nativeProps,
    ref
  })
})

export type BoxProps = Parameters<typeof Box>[0]

Box.displayName = 'Box'
