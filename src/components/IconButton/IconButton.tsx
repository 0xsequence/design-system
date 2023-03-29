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
  'width' | 'label' | 'leftIcon' | 'rightIcon' | 'size'
> & {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  icon: ComponentType<IconProps>
}

export const IconButton: PolymorphicComponent<IconButtonProps, 'button'> =
  forwardRef(
    <T extends ElementType>(
      props: PolymorphicProps<IconButtonProps, T>,
      ref: PolymorphicRef<T>
    ) => {
      const { icon, size = 'md', ...rest } = props

      return (
        <Button
          leftIcon={icon}
          size={size}
          flexShrink="0"
          ref={ref}
          {...rest}
        />
      )
    }
  )
