import { cleanup, render, screen, fireEvent } from '@testing-library/react'

import { TextInput } from './TextInput'

describe('<TextInput />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<TextInput placeholder="Enter address" />)

    const el = screen.getByRole('textbox')

    fireEvent.change(el, { target: { value: '123' } })

    expect(screen.getByDisplayValue('123')).toBeInTheDocument()
  })
})
