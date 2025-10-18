import { type ComponentProps, type ComponentType, type ReactNode } from 'react'

import type { IconProps } from '../../icons/types.js'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../InputGroup/InputGroup.js'

interface TextInputProps extends ComponentProps<'input'> {
  leftIcon?: ComponentType<IconProps>
  rightIcon?: ComponentType<IconProps>
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
          <LeftIcon size="sm" />
        </InputGroupAddon>
      )}
      {RightIcon && (
        <InputGroupAddon align="inline-end">
          <RightIcon size="sm" />
        </InputGroupAddon>
      )}
      {controls && (
        <InputGroupAddon align="inline-end">{controls}</InputGroupAddon>
      )}
    </InputGroup>
  )
}
