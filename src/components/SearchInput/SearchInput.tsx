import { forwardRef, type ChangeEvent } from 'react'

import { IconButton } from '~/components/IconButton/index.js'
import { TextInput, type TextInputProps } from '~/components/TextInput/index.js'
import { CloseIcon, SearchIcon } from '~/icons/index.js'

interface SearchInputProps extends TextInputProps {
  clearButtonClassName?: string
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const {
      onChange,
      placeholder = 'Search',
      name = 'search',
      value,
      controls,
      clearButtonClassName,
      ...rest
    } = props

    const defaultClearButton = value ? (
      <IconButton
        icon={CloseIcon}
        size="xs"
        className={clearButtonClassName}
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
