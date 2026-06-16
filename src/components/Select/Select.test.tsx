import { cleanup, fireEvent, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { renderWithTheme } from '../../providers/ThemeProvider/renderWithTheme.js'

import { Select } from './Select.js'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
]

describe('<Select />', () => {
  afterEach(cleanup)

  it('renders with placeholder', () => {
    renderWithTheme(
      <Select.Helper options={options} placeholder="Pick a fruit" />
    )

    expect(screen.getByText('Pick a fruit')).toBeInTheDocument()
  })

  it('opens and shows options on trigger click', () => {
    renderWithTheme(
      <Select.Helper options={options} placeholder="Pick a fruit" />
    )

    fireEvent.click(screen.getByRole('combobox'))

    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.getByText('Cherry')).toBeInTheDocument()
  })

  it('displays the selected value after choosing an item', async () => {
    const user = userEvent.setup()
    renderWithTheme(
      <Select.Helper options={options} placeholder="Pick a fruit" />
    )

    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Banana'))

    expect(screen.getByRole('combobox')).toHaveTextContent(/banana/i)
  })

  it('calls onValueChange with the selected value', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    renderWithTheme(
      <Select.Helper
        options={options}
        placeholder="Pick a fruit"
        onValueChange={onValueChange}
      />
    )

    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByText('Banana'))

    expect(onValueChange).toHaveBeenCalledWith('banana', expect.anything())
  })

  it('renders disabled options as non-interactive', () => {
    renderWithTheme(
      <Select.Helper
        options={[
          ...options,
          { value: 'grape', label: 'Grape', disabled: true },
        ]}
        placeholder="Pick a fruit"
      />
    )

    fireEvent.click(screen.getByRole('combobox'))

    const grapeItem = screen
      .getByText('Grape')
      .closest('[data-slot=select-item]')
    expect(grapeItem).toHaveAttribute('data-disabled')
  })
})
