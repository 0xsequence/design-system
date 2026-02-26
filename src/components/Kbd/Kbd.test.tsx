import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Kbd, KbdGroup } from './Kbd.js'

describe('<Kbd />', () => {
  afterEach(cleanup)

  it('renders as a kbd element', () => {
    render(<Kbd>⌘K</Kbd>)

    expect(screen.getByText('⌘K').tagName).toBe('KBD')
  })

  it('renders the shortcut text', () => {
    render(<Kbd>Ctrl+K</Kbd>)

    expect(screen.getByText('Ctrl+K')).toBeInTheDocument()
  })

  it('has the correct data-slot attribute', () => {
    render(<Kbd data-testid="kbd">Enter</Kbd>)

    expect(screen.getByTestId('kbd')).toHaveAttribute('data-slot', 'kbd')
  })

  it('accepts a custom className', () => {
    render(<Kbd className="custom-kbd">Esc</Kbd>)

    expect(screen.getByText('Esc')).toHaveClass('custom-kbd')
  })
})

describe('<KbdGroup />', () => {
  afterEach(cleanup)

  it('renders multiple Kbd children together', () => {
    render(
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    )

    expect(screen.getByText('Ctrl')).toBeInTheDocument()
    expect(screen.getByText('K')).toBeInTheDocument()
  })
})
