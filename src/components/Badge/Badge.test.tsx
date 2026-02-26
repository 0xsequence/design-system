import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Badge } from './Badge.js'

describe('<Badge />', () => {
  afterEach(cleanup)

  it('renders the value', () => {
    render(<Badge value="42" />)

    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('renders with default info variant', () => {
    render(<Badge value="New" />)

    const badge = screen.getByText('New').closest('div')
    expect(badge).toHaveClass('bg-info')
  })

  it('applies the correct variant class', () => {
    const { rerender } = render(<Badge value="OK" variant="success" />)
    expect(screen.getByText('OK').closest('div')).toHaveClass('bg-positive')

    rerender(<Badge value="OK" variant="error" />)
    expect(screen.getByText('OK').closest('div')).toHaveClass('bg-negative')

    rerender(<Badge value="OK" variant="warning" />)
    expect(screen.getByText('OK').closest('div')).toHaveClass('bg-warning')
  })

  it('accepts a custom className', () => {
    render(<Badge value="Custom" className="my-custom-class" />)

    expect(screen.getByText('Custom').closest('div')).toHaveClass(
      'my-custom-class'
    )
  })

  it('renders ReactNode as value', () => {
    render(<Badge value={<span data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
