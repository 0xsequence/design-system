import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Progress } from './Progress.js'

describe('<Progress />', () => {
  afterEach(cleanup)

  it('renders a progressbar', () => {
    render(<Progress value={0.5} />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('sets the indicator width proportional to value', () => {
    render(<Progress value={0.75} />)

    const indicator = document
      .querySelector('[data-slot=progress-indicator]') as HTMLElement

    expect(indicator.style.width).toBe('75%')
  })

  it('clamps indicator width at 100% when value exceeds 1', () => {
    render(<Progress value={1.5} />)

    const indicator = document
      .querySelector('[data-slot=progress-indicator]') as HTMLElement

    expect(indicator.style.width).toBe('100%')
  })

  it('renders indicator at 0% for value 0', () => {
    render(<Progress value={0} />)

    const indicator = document
      .querySelector('[data-slot=progress-indicator]') as HTMLElement

    expect(indicator.style.width).toBe('0%')
  })

  it('applies the color variant class to the indicator', () => {
    const { rerender } = render(<Progress value={0.5} color="positive" />)
    expect(
      document.querySelector('[data-slot=progress-indicator]')
    ).toHaveClass('bg-positive')

    rerender(<Progress value={0.5} color="negative" />)
    expect(
      document.querySelector('[data-slot=progress-indicator]')
    ).toHaveClass('bg-negative')

    rerender(<Progress value={0.5} color="warning" />)
    expect(
      document.querySelector('[data-slot=progress-indicator]')
    ).toHaveClass('bg-warning')
  })
})
