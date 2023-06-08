import { render, screen, fireEvent } from '@testing-library/react'

import { TextArea } from './TextArea'

describe('<TextInput />', () => {
  it('renders', () => {
    render(<TextArea name="description" placeholder="Enter description..." />)

    const el = screen.getByRole('textbox')

    fireEvent.change(el, { target: { value: '123' } })

    expect(screen.getByDisplayValue('123')).toBeInTheDocument()
  })
})
