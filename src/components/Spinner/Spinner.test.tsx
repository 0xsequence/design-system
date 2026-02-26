import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Spinner } from './Spinner.js'

describe('<Spinner />', () => {
  afterEach(cleanup)

  it('renders an svg element', () => {
    const { container } = render(<Spinner />)

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('has the correct viewBox', () => {
    const { container } = render(<Spinner />)

    expect(container.querySelector('svg')).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('applies the animate-spin class', () => {
    const { container } = render(<Spinner />)

    expect(container.querySelector('svg')).toHaveClass('animate-spin')
  })

  it('applies size variant classes', () => {
    const { container: xs } = render(<Spinner size="xs" />)
    expect(xs.querySelector('svg')).toHaveClass('size-4')

    cleanup()

    const { container: xl } = render(<Spinner size="xl" />)
    expect(xl.querySelector('svg')).toHaveClass('size-9')
  })

  it('accepts a custom className', () => {
    const { container } = render(<Spinner className="my-spinner" />)

    expect(container.querySelector('svg')).toHaveClass('my-spinner')
  })

  it('renders two circles inside the svg', () => {
    const { container } = render(<Spinner />)

    expect(container.querySelectorAll('circle')).toHaveLength(2)
  })
})
