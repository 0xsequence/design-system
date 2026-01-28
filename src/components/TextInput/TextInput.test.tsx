import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TextInput } from './TextInput.js'

describe('<TextInput />', () => {
  it('renders', () => {
    render(<TextInput name="address" placeholder="Enter address" />)

    const el = screen.getByRole('textbox')

    fireEvent.change(el, { target: { value: '123' } })

    expect(screen.getByDisplayValue('123')).toBeInTheDocument()
  })
})
