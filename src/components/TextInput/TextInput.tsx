import type { LucideProps } from 'lucide-react'
import type { ComponentProps, ComponentType, ReactNode } from 'react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../InputGroup/InputGroup.js'

interface TextInputProps extends ComponentProps<'input'> {
  leftIcon?: ComponentType<LucideProps>
  rightIcon?: ComponentType<LucideProps>
  controls?: ReactNode
}

export const TextInput = ({
  className,
  id,
  name,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  controls,
  ...props
}: TextInputProps) => {
  return (
    <InputGroup className={className}>
      <InputGroupInput id={id ?? name} name={name} {...props} />
      {LeftIcon && (
        <InputGroupAddon align="inline-start">
          <LeftIcon className="size-4" />
        </InputGroupAddon>
      )}
      {RightIcon && (
        <InputGroupAddon align="inline-end">
          <RightIcon className="size-4" />
        </InputGroupAddon>
      )}
      {controls && (
        <InputGroupAddon align="inline-end">{controls}</InputGroupAddon>
      )}
    </InputGroup>
  )
}
