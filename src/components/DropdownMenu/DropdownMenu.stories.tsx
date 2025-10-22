import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { ContextMenuIcon } from '../../icons/index.js'
import { IconButton } from '../IconButton/IconButton.js'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './DropdownMenu.js'

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenuContent,
} as Meta<typeof DropdownMenuContent>

type Story = StoryObj<typeof DropdownMenuContent>

export const Default: Story = {
  render: args => {
    const [showBookmarks, setShowBookmarks] = useState(true)
    const [showFullURLs, setShowFullURLs] = useState(false)
    const [mode, setMode] = useState<'list' | 'grid'>('list')

    return (
      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconButton icon={ContextMenuIcon} />
          </DropdownMenuTrigger>
          <DropdownMenuContent {...args}>
            <DropdownMenuItem>New Tab</DropdownMenuItem>
            <DropdownMenuItem>New Window</DropdownMenuItem>
            <DropdownMenuItem disabled>New Private Tab</DropdownMenuItem>
            <DropdownMenuItem>Item 4</DropdownMenuItem>
            <DropdownMenuItem>Item 5</DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuCheckboxItem
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
            </DropdownMenuCheckboxItem>

            <DropdownMenuSeparator />

            <DropdownMenuRadioGroup
              value={mode}
              onValueChange={value => setMode(value as any)}
            >
              <DropdownMenuRadioItem value="list">List</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
  args: {
    align: 'center',
    alignOffset: 0,
    side: 'bottom',
    sideOffset: 4,
  },
}
