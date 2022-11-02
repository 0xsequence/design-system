import { clsx, ClassValue } from 'clsx'
import {
  createElement,
  ElementType,
  ReactElement,
  forwardRef,
  Ref,
  ComponentPropsWithRef,
} from 'react'

import { atoms, Atoms } from '~/css'

export type Props<T extends ElementType = 'div'> = ComponentPropsWithRef<T> & {
  as?: T
  className?: ClassValue
} & Atoms

type PolymorphicComponent = <T extends ElementType = 'div'>(
  props: Props<T>
) => ReactElement | null

export const Box: PolymorphicComponent = forwardRef(
  <T extends ElementType>(props: Props<T>, ref: Ref<T>) => {
    const { as = 'div', className, ...restProps } = props
    const atomProps: Record<string, unknown> = {}
    const nativeProps: Record<string, unknown> = {}

    for (const key in restProps) {
      if (atoms.properties.has(key as keyof Atoms)) {
        atomProps[key] = restProps[key as keyof typeof restProps]
      } else {
        nativeProps[key] = restProps[key as keyof typeof restProps]
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

export type BoxProps = Parameters<typeof Box>[0]

export type BoxLayoutProps = Pick<
  Atoms,
  | 'margin'
  | 'marginX'
  | 'marginY'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
>
