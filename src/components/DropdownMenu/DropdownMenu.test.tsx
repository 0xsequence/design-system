import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './DropdownMenu.js'

const open = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole('button'))
}

describe('<DropdownMenu />', () => {
  afterEach(cleanup)

  it('opens and shows items', async () => {
    const user = userEvent.setup()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>New Tab</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await open(user)

    expect(screen.getByText('New Tab')).toBeInTheDocument()
  })

  it('calls onClick when a menu item is clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={onClick}>Action</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await open(user)
    await user.click(screen.getByText('Action'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies data-variant="destructive" to destructive items', async () => {
    const user = userEvent.setup()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await open(user)

    expect(
      document.querySelector('[data-slot=dropdown-menu-item]')
    ).toHaveAttribute('data-variant', 'destructive')
  })

  it('renders DropdownMenuGroup and DropdownMenuLabel', async () => {
    const user = userEvent.setup()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Section</DropdownMenuLabel>
            <DropdownMenuItem>Item</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await open(user)

    expect(screen.getByText('Section')).toBeInTheDocument()
    expect(
      document.querySelector('[data-slot=dropdown-menu-label]')
    ).toBeInTheDocument()
    expect(
      document.querySelector('[data-slot=dropdown-menu-group]')
    ).toBeInTheDocument()
  })

  it('renders a separator', async () => {
    const user = userEvent.setup()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>A</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>B</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await open(user)

    expect(
      document.querySelector('[data-slot=dropdown-menu-separator]')
    ).toBeInTheDocument()
  })

  it('renders DropdownMenuCheckboxItem and calls onCheckedChange', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={false}
            onCheckedChange={onCheckedChange}
          >
            Show Bookmarks
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await open(user)
    await user.click(screen.getByText('Show Bookmarks'))

    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('renders DropdownMenuRadioGroup and calls onValueChange', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="list" onValueChange={onValueChange}>
            <DropdownMenuRadioItem value="list">List</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await open(user)
    await user.click(screen.getByText('Grid'))

    expect(onValueChange).toHaveBeenCalledWith('grid')
  })
})
