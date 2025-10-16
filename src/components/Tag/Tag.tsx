import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentType } from 'react'

import { Text } from '~/components/Text/Text.js'
import type { IconProps } from '~/icons/types.js'

const tagVariants = cva(
  [
    'inline-flex',
    'gap-1',
    'px-2',
    'py-1',
    'whitespace-nowrap',
    'bg-button-glass',
    'text-secondary',
    'rounded-xs',
  ],
  {
    variants: {
      // Add any variants here if needed in the future
    },
  }
)

interface TagProps extends VariantProps<typeof tagVariants> {
  label: string
  icon?: ComponentType<IconProps>
  className?: string
}

export const Tag = (props: TagProps) => {
  const { icon: Icon, label, className, ...rest } = props

  return (
    <div className={tagVariants({ className })} {...rest}>
      {Icon && <Icon size="xs" />}
      <Text variant="xsmall">{label}</Text>
    </div>
  )
}
