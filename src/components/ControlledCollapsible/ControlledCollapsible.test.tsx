import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { useState } from 'react'

import { ControlledCollapsible } from './ControlledCollapsible'

const TestComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ControlledCollapsible
      open={isOpen}
      onOpenChange={open => setIsOpen(open)}
      label="Hello"
    >
      World
    </ControlledCollapsible>
  )
}

describe('<Collapsible />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<TestComponent />)
    expect(screen.getByText(/Hello/)).toBeInTheDocument()
    expect(screen.queryByText(/World/)).toBeNull()

    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByText(/World/)).toBeInTheDocument()
  })

  it('with default open', () => {
    render(
      <ControlledCollapsible label="Hello" open={true}>
        World
      </ControlledCollapsible>
    )
    expect(screen.getByText(/World/)).toBeInTheDocument()
  })
})
