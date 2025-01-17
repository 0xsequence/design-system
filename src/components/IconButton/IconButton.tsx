import type { VariantProps } from 'class-variance-authority'
import { ComponentType, forwardRef } from 'react'

import { Button, buttonVariants } from '~/components/Button'
import { IconProps } from '~/icons/types'

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  asChild?: boolean
  disabled?: boolean
  pending?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: VariantProps<typeof buttonVariants>['variant']
  icon: ComponentType<IconProps>
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { icon, size = 'md', ...rest } = props

    return <Button leftIcon={icon} size={size} ref={ref} {...rest} />
  }
)
