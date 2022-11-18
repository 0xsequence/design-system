import { render, screen } from '@testing-library/react'

import { Tag } from './Tag'

describe('<Tag />', () => {
  it('renders', () => {
    render(<Tag label="ERC1155" />)

    expect(screen.getByText('ERC1155')).toBeInTheDocument()
  })
})
