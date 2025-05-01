import { render, screen, fireEvent } from '@testing-library/react'

import { NumericInput } from './NumericInput.js'

describe('<NumericInput />', () => {
  it('renders', () => {
    render(
      <NumericInput
        name="address"
        placeholder="Enter address"
        onChange={value => value}
      />
    )

    const el = screen.getByRole('textbox')

    fireEvent.change(el, { target: { value: '123.456' } })

    expect(screen.getByDisplayValue('123.456')).toBeInTheDocument()
  })
})
