import { clsx } from 'clsx'
import React, {
  createElement,
  ReactElement,
  ElementType,
  forwardRef,
  Ref,
  ComponentPropsWithRef,
} from 'react'

import { atoms, Atoms } from '~/css'

export type BoxProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T
    sx?: Atoms
    ref?: Ref<ComponentPropsWithRef<T>['ref']> | null
  }

export type PolymorphicProps<P, T extends ElementType> = P & BoxProps<T>

export type PolymorphicComponent<P, D extends ElementType> = <
  T extends React.ElementType = D
>(
  props: PolymorphicProps<P, T>
) => ReactElement | null

export const Box: PolymorphicComponent<{}, 'div'> = forwardRef(
  <T extends ElementType>(props: BoxProps<T>, ref: Ref<HTMLElement>) => {
    const { as = 'div', className, sx, ...nativeProps } = props

    return createElement(as, {
      className: clsx(atoms({ ...sx }), className),
      ...nativeProps,
      ref,
    })
  }
)
