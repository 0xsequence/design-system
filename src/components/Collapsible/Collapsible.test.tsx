import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'

import { Collapsible } from './Collapsible.js'

const TestComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={open => setIsOpen(open)}
      label="Hello"
    >
      World
    </Collapsible>
  )
}

describe('<Collapsible />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Collapsible label="Hello">World</Collapsible>)
    expect(screen.getByText(/Hello/)).toBeInTheDocument()
    expect(screen.queryByText(/World/)).toBeNull()

    fireEvent.click(screen.getByRole('button'))

    expect(screen.getByText(/World/)).toBeInTheDocument()
  })

  it('controlled', () => {
    render(<TestComponent />)
    expect(screen.getByText(/Hello/)).toBeInTheDocument()
    expect(screen.queryByText(/World/)).toBeNull()

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
