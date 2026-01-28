import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './DropdownMenu.js'

describe('<DropdownMenu />', () => {
  afterEach(cleanup)

  it('renders', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>New Tab</DropdownMenuItem>
          <DropdownMenuItem>New Window</DropdownMenuItem>
          <DropdownMenuItem disabled>New Private Tab</DropdownMenuItem>
          <DropdownMenuItem>Item 4</DropdownMenuItem>
          <DropdownMenuItem>Item 5</DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* <DropdownMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={value => setShowBookmarks(!!value)}
          >
            Show Bookmarks
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showFullURLs}
            onCheckedChange={value => setShowFullURLs(!!value)}
          >
            Show Full URLs
          </DropdownMenuCheckboxItem> */}

          <DropdownMenuSeparator />

          {/* <DropdownMenuRadioGroup
            value={mode}
            onValueChange={value => setMode(value as any)}
          >
            <DropdownMenuRadioItem value="list">List</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup> */}
        </DropdownMenuContent>
      </DropdownMenu>
    )

    expect(screen.getByText(/Menu/)).toBeInTheDocument()

    await user.click(screen.getByRole('button'))

    expect(screen.getByText(/New Tab/)).toBeInTheDocument()
  })
})
