import { ChangeEvent, forwardRef } from 'react'

import { IconButton } from '~/components/IconButton'
import { TextInput, TextInputProps } from '~/components/TextInput'
import { CloseIcon, SearchIcon } from '~/icons'

export const SearchInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      onChange,
      placeholder = 'Search',
      name = 'search',
      value,
      controls,
      ...rest
    } = props

    const defaultClearButton = value ? (
      <IconButton
        icon={CloseIcon}
        size="xs"
        onClick={() =>
          onChange?.({
            target: { value: '' },
          } as ChangeEvent<HTMLInputElement>)
        }
      />
    ) : undefined

    return (
      <TextInput
        ref={ref}
        name={name}
        leftIcon={SearchIcon}
        controls={controls || defaultClearButton}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    )
  }
)
