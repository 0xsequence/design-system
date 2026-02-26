import { cleanup, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import { renderWithTheme } from '../../providers/ThemeProvider/renderWithTheme.js'

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from './Popover.js'

const TestPopover = () => (
  <Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>
      <p>Popover content</p>
      <PopoverClose>Close popover</PopoverClose>
    </PopoverContent>
  </Popover>
)

describe('<Popover />', () => {
  afterEach(cleanup)

  it('content is hidden until trigger is clicked', () => {
    renderWithTheme(<TestPopover />)

    expect(screen.queryByText('Popover content')).not.toBeInTheDocument()
  })

  it('shows content after trigger is clicked', async () => {
    const user = userEvent.setup()
    renderWithTheme(<TestPopover />)

    await user.click(screen.getByRole('button', { name: 'Open' }))

    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })

  it('closes when PopoverClose is clicked', async () => {
    const user = userEvent.setup()
    renderWithTheme(<TestPopover />)

    await user.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByText('Popover content')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close popover' }))
    expect(screen.queryByText('Popover content')).not.toBeInTheDocument()
  })

  it('closes on Escape key press', async () => {
    const user = userEvent.setup()
    renderWithTheme(<TestPopover />)

    await user.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByText('Popover content')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByText('Popover content')).not.toBeInTheDocument()
  })

  it('can be controlled with defaultOpen', () => {
    renderWithTheme(
      <Popover defaultOpen>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <p>Already visible</p>
        </PopoverContent>
      </Popover>
    )

    expect(screen.getByText('Already visible')).toBeInTheDocument()
  })
})
