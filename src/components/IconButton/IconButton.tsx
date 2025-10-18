import { cva } from 'class-variance-authority'
import { type ComponentProps, type ComponentType } from 'react'

import type { IconProps } from '../../icons/types.js'
import { ButtonPreset } from '../Button/ButtonPreset.js'

const iconButtonVariants = cva(
  'p-0 flex shrink-0 items-center justify-center',
  {
    variants: {
      size: {
        xs: 'size-7',
        sm: 'size-9',
        md: 'size-11',
        lg: 'size-13',
      },
    },
  }
)

interface IconButtonProps
  extends Omit<
    ComponentProps<typeof ButtonPreset>,
    'leftIcon' | 'rightIcon' | 'label'
  > {
  icon: ComponentType<IconProps>
}

export const IconButton = (props: IconButtonProps) => {
  const { icon: Icon, size = 'md', ...rest } = props

  return (
    <ButtonPreset
      className={iconButtonVariants({ size })}
      leftIcon={Icon}
      size={size}
      {...rest}
    />
  )
}
