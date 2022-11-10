import { cleanup, render, screen } from '@testing-library/react'

import { Modal } from './Modal'

describe('<Modal />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Modal>Hello, world!</Modal>)

    expect(screen.getByText('Hello, world!')).toBeInTheDocument()
  })
})
