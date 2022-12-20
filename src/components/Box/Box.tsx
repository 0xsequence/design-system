import { clsx } from 'clsx'
import {
  createElement,
  ElementType,
  ReactElement,
  forwardRef,
  Ref,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from 'react'

import { atoms, Atoms } from '~/css'

export type BoxProps<T extends ElementType = 'div'> =
  ComponentPropsWithoutRef<T> & {
    as?: T
    sx?: Atoms
    ref?: ComponentPropsWithRef<T>['ref'] | null
  } & Atoms

export type PolymorphicProps<P, T extends ElementType> = P & BoxProps<T>

export type PolymorphicComponent<P, D extends ElementType = 'div'> = <
  T extends ElementType = D
>(
  props: PolymorphicProps<P, T>
) => ReactElement | null

export type PolymorphicRef<T extends ElementType = 'div'> = BoxProps<T>['ref']

const FLEX_PROPS = [
  'alignItems',
  'alignSelf',
  'flexDirection',
  'gap',
  'justifyContent',
  'justifySelf',
  'placeItems',
]

export const Box: PolymorphicComponent<{}, 'div'> = forwardRef(
  <T extends ElementType>(props: BoxProps<T>, ref: Ref<HTMLElement>) => {
    const { as = 'div', sx = {}, className, ...restProps } = props
    const atomProps: Record<string, unknown> = {}
    const nativeProps: Record<string, unknown> = {}

    for (const key in restProps) {
      if (atoms.properties.has(key as keyof Atoms)) {
        atomProps[key] = restProps[key as keyof typeof restProps]
      } else {
        nativeProps[key] = restProps[key as keyof typeof restProps]
      }
    }

    atomProps.display ||= Object.keys(atomProps).some(k =>
      FLEX_PROPS.includes(k)
    )
      ? 'flex'
      : undefined

    const atomicClasses = atoms({
      ...atomProps,
      ...sx,
    })

    return createElement(as, {
      className: clsx(atomicClasses, className),
      ...nativeProps,
      ref,
    })
  }
)
