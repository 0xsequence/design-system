import { cleanup, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import { renderWithTheme } from '../../providers/ThemeProvider/renderWithTheme.js'

import { Tooltip } from './Tooltip.js'

describe('<Tooltip />', () => {
  afterEach(cleanup)

  it('renders', async () => {
    const user = userEvent.setup()

    const res = renderWithTheme(
      <Tooltip message="Tip">
        <button>Hover me</button>
      </Tooltip>
    )

    const triggerEl = screen.getByText(/Hover me/)

    expect(triggerEl).toBeInTheDocument()
    expect(triggerEl.getAttribute('data-state')).toBe('closed')
    expect(screen.queryByText(/Tip/)).toBeNull()

    await user.hover(res.getByText(/Hover me/))

    expect(triggerEl.getAttribute('data-state')).toBe('delayed-open')

    expect(screen.getAllByText(/Tip/i)[0]).toBeInTheDocument()
  })
})
