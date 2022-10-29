import { clsx, ClassValue } from 'clsx'
import { createElement, forwardRef } from 'react'

import { atoms, Atoms } from '~/css'

type HTMLProperties = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'as' | 'className' | 'color' | 'height' | 'width'
>

type Props = Atoms &
  HTMLProperties & {
    as?: React.ElementType
    className?: ClassValue
  }

export const Box = forwardRef<HTMLElement, Props>(
  ({ as = 'div', className, ...props }: Props, ref) => {
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
      ...atomProps,
    })

    return createElement(as, {
      className: clsx(atomicClasses, className),
      ...nativeProps,
      ref,
    })
  }
)

Box.displayName = 'Box'

export type BoxProps = Parameters<typeof Box>[0]

export type BoxLayoutProps = Pick<
  BoxProps,
  | 'children'
  | 'margin'
  | 'marginX'
  | 'marginY'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
>
