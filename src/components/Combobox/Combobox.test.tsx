import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { ComponentProps } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { renderWithTheme } from '../../providers/ThemeProvider/renderWithTheme.js'

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from './Combobox.js'

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro']

function FrameworkCombobox(
  props: Omit<ComponentProps<typeof Combobox>, 'children' | 'items'> & {
    inputProps?: Omit<ComponentProps<typeof ComboboxInput>, 'children'>
  }
) {
  const { inputProps, ...rootProps } = props

  return (
    <Combobox items={[...frameworks]} {...rootProps}>
      <ComboboxInput placeholder="Pick a framework" {...inputProps} />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

describe('<Combobox />', () => {
  it('renders the input placeholder', () => {
    renderWithTheme(<FrameworkCombobox />)

    expect(screen.getByPlaceholderText('Pick a framework')).toBeInTheDocument()
  })

  it('opens the list and shows options when the combobox is activated', async () => {
    const user = userEvent.setup()
    renderWithTheme(<FrameworkCombobox />)

    await user.click(screen.getByRole('combobox'))

    for (const name of frameworks) {
      expect(
        screen.getByRole('option', { name, hidden: false })
      ).toBeInTheDocument()
    }
  })

  it('selects an option and calls onValueChange', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    renderWithTheme(<FrameworkCombobox onValueChange={onValueChange} />)

    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByRole('option', { name: 'SvelteKit' }))

    expect(onValueChange).toHaveBeenCalledWith('SvelteKit', expect.anything())
    expect(screen.getByRole('combobox')).toHaveValue('SvelteKit')
  })

  it('disables the input when disabled is set on ComboboxInput', () => {
    renderWithTheme(<FrameworkCombobox inputProps={{ disabled: true }} />)

    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('marks the input invalid when aria-invalid is set', () => {
    renderWithTheme(<FrameworkCombobox inputProps={{ 'aria-invalid': true }} />)

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true')
  })
})
