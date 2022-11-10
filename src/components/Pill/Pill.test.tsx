import { cleanup, render, screen } from '@testing-library/react'

import { Pill } from './Pill'

describe('<Pill />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Pill>ERC1155</Pill>)

    expect(screen.getByText('ERC1155')).toBeInTheDocument()
  })
})
