import type { VariantProps } from 'class-variance-authority'
import { forwardRef, type ComponentType } from 'react'

import type { IconProps } from '../../icons/types.js'
import { Button, buttonVariants, type ButtonProps } from '../Button/Button.js'

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  asChild?: boolean
  disabled?: boolean
  pending?: boolean
  shape?: ButtonProps['shape']
  size?: ButtonProps['size']
  variant?: VariantProps<typeof buttonVariants>['variant']
  icon: ComponentType<IconProps>
  children?: React.ReactNode
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { icon, size = 'md', ...rest } = props

    return <Button leftIcon={icon} size={size} ref={ref} {...rest} />
  }
)
