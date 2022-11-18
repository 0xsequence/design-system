import { ComponentType, ElementType, forwardRef } from 'react'

import {
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Button, ButtonVariants } from '~/components/Button'
import { IconProps } from '~/icons/types'

type TagProps = Omit<
  ButtonVariants,
  'width' | 'LeftIcon' | 'RightIcon' | 'size'
> & {
  label: string
  Icon?: ComponentType<IconProps>
}

export const Tag: PolymorphicComponent<TagProps, 'button'> = forwardRef(
  <T extends ElementType>(
    { Icon, label, ...otherProps }: PolymorphicProps<TagProps, T>,
    ref: PolymorphicRef<T>
  ) => (
    <Button
      label={label}
      LeftIcon={Icon}
      ref={ref}
      size="xs"
      variant="base"
      {...otherProps}
    />
  )
)
