import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { Switch } from './Switch.js'

describe('<Switch />', () => {
  afterEach(cleanup)

  it('renders unchecked by default', () => {
    render(<Switch aria-label="Enable notifications" />)

    expect(
      screen.getByRole('switch', { name: 'Enable notifications' })
    ).not.toBeChecked()
  })

  it('renders checked when defaultChecked', () => {
    render(<Switch aria-label="Enable notifications" defaultChecked />)

    expect(
      screen.getByRole('switch', { name: 'Enable notifications' })
    ).toBeChecked()
  })

  it('toggles checked state on click', () => {
    render(<Switch aria-label="Enable notifications" />)

    const toggle = screen.getByRole('switch', { name: 'Enable notifications' })

    fireEvent.click(toggle)
    expect(toggle).toBeChecked()

    fireEvent.click(toggle)
    expect(toggle).not.toBeChecked()
  })

  it('calls onCheckedChange when toggled', () => {
    const onCheckedChange = vi.fn()
    render(
      <Switch
        aria-label="Enable notifications"
        onCheckedChange={onCheckedChange}
      />
    )

    fireEvent.click(screen.getByRole('switch', { name: 'Enable notifications' }))

    expect(onCheckedChange).toHaveBeenCalledWith(true, expect.anything())
  })

  it('does not toggle when disabled', () => {
    render(<Switch aria-label="Enable notifications" disabled />)

    const toggle = screen.getByRole('switch', { name: 'Enable notifications' })
    fireEvent.click(toggle)

    expect(toggle).not.toBeChecked()
  })
})
