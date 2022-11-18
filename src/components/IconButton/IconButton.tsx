import { ComponentType, ElementType, forwardRef } from 'react'

import {
  PolymorphicComponent,
  PolymorphicProps,
  PolymorphicRef,
} from '~/components/Box'
import { Button, ButtonVariants } from '~/components/Button'
import { IconProps } from '~/icons/types'

type IconButtonProps = Omit<
  ButtonVariants,
  'width' | 'label' | 'LeftIcon' | 'RightIcon' | 'size'
> & {
  size?: 'xs' | 'sm' | 'md'
  Icon: ComponentType<IconProps>
}

export const IconButton: PolymorphicComponent<IconButtonProps, 'button'> =
  forwardRef(
    <T extends ElementType>(
      {
        Icon,
        size = 'md',
        ...otherProps
      }: PolymorphicProps<IconButtonProps, T>,
      ref: PolymorphicRef<T>
    ) => <Button LeftIcon={Icon} size={size} ref={ref} {...otherProps} />
  )
