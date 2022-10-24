import { cleanup, render, screen } from '@testing-library/react'

import { Box } from './Box'

describe('<Box />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Box>foo bar baz</Box>)
    expect(screen.getByText(/foo/i)).toBeInTheDocument()
  })
})
