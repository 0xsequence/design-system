import { ChangeEvent, ComponentProps, ForwardedRef, forwardRef } from 'react'

import { IconButton, PolymorphicComponent, TextInput } from '~/components'
import { CloseIcon, SearchIcon } from '~/icons'

type SearchInputProps = ComponentProps<typeof TextInput> & {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  name?: string
}

export const SearchInput: PolymorphicComponent<SearchInputProps, 'input'> =
  forwardRef((props: SearchInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      onChange,
      placeholder = 'Search',
      name = 'search',
      value,
      ...rest
    } = props

    return (
      <TextInput
        ref={ref}
        name={name}
        leftIcon={SearchIcon}
        controls={
          value ? (
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
        }
        placeholder={placeholder}
        value={value}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => onChange?.(ev)}
        {...rest}
      />
    )
  })
