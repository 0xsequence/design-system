import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import { Progress } from './Progress.js'

describe('<Progress />', () => {
  afterEach(cleanup)

  it('renders a progressbar', () => {
    render(<Progress value={50} />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('sets the indicator width proportional to value', () => {
    render(<Progress value={75} />)

    const indicator = document.querySelector(
      '[data-slot=progress-indicator]'
    ) as HTMLElement

    expect(indicator.style.width).toBe('75%')
  })

  it('renders indicator at 0% for value 0', () => {
    render(<Progress value={0} />)

    const indicator = document.querySelector(
      '[data-slot=progress-indicator]'
    ) as HTMLElement

    expect(indicator.style.width).toBe('0%')
  })
})
