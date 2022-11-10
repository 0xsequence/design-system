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
export type BoxProps<T extends ElementType = 'div'> =
  ComponentPropsWithRef<T> & {
    as?: T
    className?: ClassValue
    sx?: Atoms
  }

type PolymorphicComponent = <T extends ElementType = 'div'>(
  props: BoxProps<T>
) => ReactElement | null

export const Box: PolymorphicComponent = forwardRef(
  <T extends ElementType>(props: BoxProps<T>, ref: Ref<T>) => {
    const { as = 'div', className, sx, ...nativeProps } = props

    return createElement(as, {
      className: clsx(atoms({ ...sx }), className),
      ...nativeProps,
      ref,
    })
  }
)
