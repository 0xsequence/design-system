import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { StopClickPropagation } from './StopClickPropagation.js'

describe('<StopClickPropagation />', () => {
  afterEach(cleanup)

  it('renders children', () => {
    render(
      <StopClickPropagation>
        <button type="button">Inner</button>
      </StopClickPropagation>
    )

    expect(screen.getByText('Inner')).toBeInTheDocument()
  })

  it('prevents click events from reaching a parent handler', () => {
    const parentClick = vi.fn()
    render(
      <button type="button" onClick={parentClick}>
        <StopClickPropagation>
          <button type="button">Inner</button>
        </StopClickPropagation>
      </button>
    )

    fireEvent.click(screen.getByText('Inner'))

    expect(parentClick).not.toHaveBeenCalled()
  })

  it('prevents Enter key events from reaching a parent handler', () => {
    const parentKeyDown = vi.fn()
    render(
      <button type="button" onKeyDown={parentKeyDown}>
        <StopClickPropagation>
          <button type="button">Inner</button>
        </StopClickPropagation>
      </button>
    )

    fireEvent.keyDown(screen.getByText('Inner'), { key: 'Enter' })

    expect(parentKeyDown).not.toHaveBeenCalled()
  })

  it('prevents Space key events from reaching a parent handler', () => {
    const parentKeyDown = vi.fn()
    render(
      <button type="button" onKeyDown={parentKeyDown}>
        <StopClickPropagation>
          <span>Inner</span>
        </StopClickPropagation>
      </button>
    )

    fireEvent.keyDown(screen.getByText('Inner'), { key: ' ' })

    expect(parentKeyDown).not.toHaveBeenCalled()
  })

  it('does not block unrelated key events from propagating', () => {
    const parentKeyDown = vi.fn()
    render(
      <button type="button" onKeyDown={parentKeyDown}>
        <StopClickPropagation>
          <input aria-label="search" />
        </StopClickPropagation>
      </button>
    )

    fireEvent.keyDown(screen.getByRole('textbox', { name: 'search' }), {
      key: 'a',
    })

    expect(parentKeyDown).toHaveBeenCalled()
  })
})
