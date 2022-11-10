import { cleanup, render, screen } from '@testing-library/react'

import { Collapsible } from './Collapsible'

describe('<Collapsible />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Collapsible label="Hello">World</Collapsible>)
    expect(screen.getByText(/Hello/i)).toBeInTheDocument()
  })
})
