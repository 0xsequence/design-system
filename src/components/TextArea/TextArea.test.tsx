import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TextArea } from './TextArea.js'

describe('<TextInput />', () => {
  it('renders', () => {
    render(<TextArea name="description" placeholder="Enter description..." />)

    const el = screen.getByRole('textbox')

    fireEvent.change(el, { target: { value: '123' } })

    expect(screen.getByDisplayValue('123')).toBeInTheDocument()
  })
})
