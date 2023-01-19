import { ChangeEvent, forwardRef } from 'react'

import {
  IconButton,
  PolymorphicProps,
  PolymorphicRef,
  TextInput,
} from '~/components'
import { CloseIcon, SearchIcon } from '~/icons'

import { TextInputProps } from '../TextInput/TextInput'

type SearchInputProps = TextInputProps & {
  name?: string
}

export const SearchInput = forwardRef(
  (
    props: PolymorphicProps<SearchInputProps, 'input'>,
    ref: PolymorphicRef<'input'>
  ) => {
    const {
      controls,
      onChange,
      placeholder = 'Search',
      name = 'search',
      value,
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
        onChange={(ev: ChangeEvent<HTMLInputElement>) => onChange?.(ev)}
        {...rest}
      />
    )
  }
)
