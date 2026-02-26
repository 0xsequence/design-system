import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { VisuallyHidden } from './VisuallyHidden.js'

describe('<VisuallyHidden />', () => {
  afterEach(cleanup)

  it('renders a span element', () => {
    const { container } = render(<VisuallyHidden>Hidden text</VisuallyHidden>)

    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('renders children in the DOM', () => {
    render(<VisuallyHidden>Screen reader only</VisuallyHidden>)

    expect(screen.getByText('Screen reader only')).toBeInTheDocument()
  })

  it('does not remove the element from the DOM', () => {
    render(<VisuallyHidden>Accessible label</VisuallyHidden>)

    const el = screen.getByText('Accessible label')
    expect(el).toBeInTheDocument()
    expect(el.closest('span')).not.toBeNull()
  })

  it('forwards a custom className', () => {
    const { container } = render(
      <VisuallyHidden className="extra-class">Text</VisuallyHidden>
    )

    expect(container.querySelector('span')).toHaveClass('extra-class')
  })
})
