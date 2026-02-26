import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Checkbox } from './Checkbox.js'

describe('<Checkbox />', () => {
  afterEach(cleanup)

  it('renders unchecked by default', () => {
    render(<Checkbox aria-label="Agree" />)

    expect(screen.getByRole('checkbox', { name: 'Agree' })).not.toBeChecked()
  })

  it('renders checked when defaultChecked', () => {
    render(<Checkbox aria-label="Agree" defaultChecked />)

    expect(screen.getByRole('checkbox', { name: 'Agree' })).toBeChecked()
  })

  it('toggles checked state on click', () => {
    render(<Checkbox aria-label="Agree" />)

    const checkbox = screen.getByRole('checkbox', { name: 'Agree' })

    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('calls onCheckedChange when toggled', () => {
    const onCheckedChange = vi.fn()
    render(<Checkbox aria-label="Agree" onCheckedChange={onCheckedChange} />)

    fireEvent.click(screen.getByRole('checkbox', { name: 'Agree' }))

    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('does not toggle when disabled', () => {
    render(<Checkbox aria-label="Agree" disabled />)

    const checkbox = screen.getByRole('checkbox', { name: 'Agree' })
    fireEvent.click(checkbox)

    expect(checkbox).not.toBeChecked()
  })
})
