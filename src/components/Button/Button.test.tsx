import { cleanup, render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('<Button />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Button label="Hello, world!" />)

    expect(screen.getByText('Hello, world!')).toBeInTheDocument()
  })
})
