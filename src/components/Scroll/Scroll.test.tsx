import { render, screen } from '@testing-library/react'

import { Scroll } from './Scroll'

describe('<Scroll />', () => {
  it('renders', () => {
    render(<Scroll>Long text...</Scroll>)

    expect(screen.getByText('Long text...')).toBeInTheDocument()
  })
})
