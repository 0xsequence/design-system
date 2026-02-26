import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { SearchInput } from './SearchInput.js'

describe('<SearchInput />', () => {
  afterEach(cleanup)

  it('renders with default placeholder', () => {
    render(<SearchInput />)

    expect(screen.getByPlaceholderText('Search…')).toBeInTheDocument()
  })

  it('renders with a custom placeholder', () => {
    render(<SearchInput placeholder="Find items…" />)

    expect(screen.getByPlaceholderText('Find items…')).toBeInTheDocument()
  })

  it('calls onChange when text is entered', () => {
    const onChange = vi.fn()
    render(<SearchInput onChange={onChange} />)

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'hello' },
    })

    expect(onChange).toHaveBeenCalled()
  })

  it('clear button calls onChange with empty string', () => {
    const onChange = vi.fn()
    render(<SearchInput onChange={onChange} />)

    // Type something so the input has a value
    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'hello' } })

    // Click the clear button
    fireEvent.click(screen.getByRole('button'))

    expect(onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ target: expect.objectContaining({ value: '' }) })
    )
  })

  it('hides clear button when showClear is false', () => {
    render(<SearchInput showClear={false} />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('focuses the input on Ctrl+K when showKeyboardShortcut is true', () => {
    render(<SearchInput showKeyboardShortcut />)

    const input = screen.getByRole('textbox')

    fireEvent.keyDown(document, { key: 'k', ctrlKey: true })

    expect(document.activeElement).toBe(input)
  })
})
