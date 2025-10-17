import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  type ChangeEvent,
  type ComponentProps,
} from 'react'

import { CloseIcon, SearchIcon } from '../../icons/index.js'
import { isMacOS } from '../../utils/platform.js'
import { IconButton } from '../IconButton/IconButton.js'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../InputGroup/InputGroup.js'
import { Kbd } from '../Kbd/Kbd.js'

export interface SearchInputProps extends ComponentProps<'input'> {
  showKeyboardShortcut?: boolean
  showClear?: boolean
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, forwardRef) => {
    const {
      className,
      onChange,
      placeholder = 'Search…',
      showKeyboardShortcut = true,
      showClear = true,
      ...rest
    } = props

    const ref = useRef<HTMLInputElement>(null)

    useImperativeHandle(forwardRef, () => ref.current!)

    useEffect(() => {
      if (!showKeyboardShortcut) {
        return
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
        if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
          event.preventDefault()
          ref.current?.focus()
        }
      }

      document.addEventListener('keydown', handleKeyDown)

      return () => document.removeEventListener('keydown', handleKeyDown)
    }, [showKeyboardShortcut])

    const handleClear = useCallback(() => {
      onChange?.({ target: { value: '' } } as ChangeEvent<HTMLInputElement>)
      ref.current?.focus()
    }, [onChange])

    return (
      <InputGroup className={className}>
        <InputGroupAddon align="inline-start">
          <SearchIcon />
        </InputGroupAddon>

        <InputGroupInput
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          {...rest}
        />

        <InputGroupAddon align="inline-end" className="relative">
          {showClear && (
            <IconButton
              className="transition-opacity opacity-100 inert:opacity-0"
              icon={CloseIcon}
              size="xs"
              variant="ghost"
              onClick={handleClear}
              inert={!ref.current?.value.length}
            />
          )}
          {showKeyboardShortcut && (
            <Kbd className="absolute right-4 transition-opacity opacity-100 group-focus-within/input-group:opacity-0">
              {isMacOS() ? '⌘K' : 'Ctrl+K'}
            </Kbd>
          )}
        </InputGroupAddon>
      </InputGroup>
    )
  }
)
