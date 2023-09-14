import { cleanup, render, screen, fireEvent } from '@testing-library/react'

import { Collapsible } from './Collapsible'

describe('<Collapsible />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Collapsible label="Hello">World</Collapsible>)
    expect(screen.getByText(/Hello/)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByText(/World/)).toBeInTheDocument()
  })

  it('with default open', () => {
    render(
      <Collapsible label="Hello" defaultOpen>
        World
      </Collapsible>
    )
    expect(screen.getByText(/World/)).toBeInTheDocument()
  })
})
