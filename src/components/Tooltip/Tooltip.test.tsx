import { cleanup, render, screen, fireEvent } from '@testing-library/react'

import { Tooltip } from './Tooltip'

describe('<Tooltip />', () => {
  afterEach(cleanup)

  it('renders', async () => {
    const res = render(
      <Tooltip message="Tip!">
        <button>Hover me</button>
      </Tooltip>
    )

    expect(screen.getByText(/Hover me/i)).toBeInTheDocument()
    expect(screen.queryByText(/Tip!/i)).toBeNull()

    fireEvent.mouseOver(res.getByText(/Hover me/i))

    // await res.findByText(/Tip/i)

    // expect(screen.getByText(/Tip!/i)).toBeInTheDocument()
  })
})
