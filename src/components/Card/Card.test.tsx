import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Card } from './Card.js'

describe('<Card />', () => {
  afterEach(cleanup)

  it('renders children', () => {
    render(<Card>Card content</Card>)

    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders as a div by default', () => {
    render(<Card data-testid="card">Content</Card>)

    expect(screen.getByTestId('card').tagName).toBe('DIV')
  })

  it('clickable variant adds cursor-pointer class', () => {
    render(
      <Card clickable data-testid="card">
        Clickable
      </Card>
    )

    expect(screen.getByTestId('card')).toHaveClass('cursor-pointer')
  })

  it('disabled variant adds opacity-50 class', () => {
    render(
      <Card disabled data-testid="card">
        Disabled
      </Card>
    )

    expect(screen.getByTestId('card')).toHaveClass('opacity-50')
  })

  it('renders as the child element when asChild is true', () => {
    render(
      <Card asChild>
        <a href="/home" data-testid="card-link">
          Link card
        </a>
      </Card>
    )

    expect(screen.getByTestId('card-link').tagName).toBe('A')
  })

  it('forwards onClick when clickable', () => {
    const onClick = vi.fn()
    render(
      <Card clickable onClick={onClick} data-testid="card">
        Click me
      </Card>
    )

    fireEvent.click(screen.getByTestId('card'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
