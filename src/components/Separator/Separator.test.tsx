import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Separator } from './Separator.js'

describe('<Separator />', () => {
  afterEach(cleanup)

  it('renders as a decorative element by default (no separator role)', () => {
    render(<Separator />)

    expect(screen.queryByRole('separator')).not.toBeInTheDocument()
  })

  it('renders with role="separator" when decorative is false', () => {
    render(<Separator decorative={false} />)

    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('defaults to horizontal orientation', () => {
    render(<Separator decorative={false} />)

    // Native div: horizontal uses h-px class, no aria-orientation
    expect(screen.getByRole('separator')).not.toHaveAttribute('aria-orientation')
  })

  it('renders with vertical orientation', () => {
    render(<Separator decorative={false} orientation="vertical" />)

    expect(screen.getByRole('separator')).toHaveAttribute(
      'aria-orientation',
      'vertical'
    )
  })

  it('accepts a custom className', () => {
    render(<Separator className="my-separator" />)

    expect(
      document.querySelector('[data-slot=separator]')
    ).toHaveClass('my-separator')
  })
})
