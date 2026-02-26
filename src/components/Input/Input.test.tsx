import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Input } from './Input.js'

describe('<Input />', () => {
  afterEach(cleanup)

  it('renders a textbox', () => {
    render(<Input />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<Input placeholder="Enter text…" />)

    expect(screen.getByPlaceholderText('Enter text…')).toBeInTheDocument()
  })

  it('calls onChange when the value changes', () => {
    const onChange = vi.fn()
    render(<Input onChange={onChange} />)

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'hello' },
    })

    expect(onChange).toHaveBeenCalled()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Input disabled />)

    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('forwards aria-invalid for validation state', () => {
    render(<Input aria-invalid />)

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('accepts a custom className', () => {
    render(<Input className="my-input" />)

    expect(screen.getByRole('textbox')).toHaveClass('my-input')
  })

  it('renders with data-slot attribute', () => {
    render(<Input />)

    expect(screen.getByRole('textbox')).toHaveAttribute('data-slot', 'input')
  })
})
