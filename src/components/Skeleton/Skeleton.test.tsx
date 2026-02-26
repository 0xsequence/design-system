import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Skeleton } from './Skeleton.js'

describe('<Skeleton />', () => {
  afterEach(cleanup)

  it('renders a div', () => {
    const { container } = render(<Skeleton />)

    expect(container.firstChild).toBeInTheDocument()
    expect((container.firstChild as HTMLElement).tagName).toBe('DIV')
  })

  it('applies the animate-skeleton class', () => {
    const { container } = render(<Skeleton />)

    expect(container.firstChild).toHaveClass('animate-skeleton')
  })

  it('applies size variant classes', () => {
    const { container: sm } = render(<Skeleton size="sm" />)
    expect(sm.firstChild).toHaveClass('w-24', 'h-4')

    cleanup()

    const { container: xl } = render(<Skeleton size="xl" />)
    expect(xl.firstChild).toHaveClass('w-[148px]', 'h-9')
  })

  it('accepts a custom className', () => {
    const { container } = render(<Skeleton className="my-skeleton" />)

    expect(container.firstChild).toHaveClass('my-skeleton')
  })

  it('renders with no size by default (no size class applied)', () => {
    const { container } = render(<Skeleton />)

    // None of the size-specific classes should be present when no size is given
    expect(container.firstChild).not.toHaveClass('w-24')
    expect(container.firstChild).not.toHaveClass('w-[100px]')
  })
})
