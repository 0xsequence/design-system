import { ElementType, forwardRef, PropsWithChildren } from 'react'

import {
  Box,
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'

export const StopClickPropagation: PolymorphicComponent<
  PropsWithChildren,
  'div'
> = forwardRef(
  <T extends ElementType>(
    { children }: PolymorphicProps<PropsWithChildren, T>,
    ref: PolymorphicRef<T>
  ) => (
    <Box
      ref={ref}
      width="fit"
      height="fit"
      onClick={ev => ev.stopPropagation()}
      onKeyDown={ev => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.stopPropagation()
        }
      }}
    >
      {children}
    </Box>
  )
)
