import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { IconButton } from '~/components/IconButton/index.js'
import { ContextMenuIcon } from '~/icons/index.js'

import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './DropdownMenu.js'

export default {
  title: 'Components/DropdownMenu',
} as Meta<any>

type Story = StoryObj<any>

const StoryWrapper = () => {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullURLs, setShowFullURLs] = useState(false)
  const [mode, setMode] = useState<'list' | 'grid'>('list')

  return (
    <div className="flex justify-center">
      <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
          <IconButton icon={ContextMenuIcon} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
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
      </DropdownMenuRoot>
    </div>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {},
}
