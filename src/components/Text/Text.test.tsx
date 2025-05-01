import { cleanup, render, screen } from '@testing-library/react'

import { Text } from './Text.js'

describe('<Text />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Text>Hello, World!</Text>)
    expect(screen.getByText(/Hello/i)).toBeInTheDocument()
  })
})
