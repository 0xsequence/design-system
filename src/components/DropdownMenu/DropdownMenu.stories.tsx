import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

import { Box } from '~/components/Box'
import { IconButton } from '~/components/IconButton'
import { ContextMenuIcon } from '~/icons'

import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from './DropdownMenu'

export default {
  title: 'Components/DropdownMenu',
} as Meta<any>

type Story = StoryObj<any>

const StoryWrapper = () => {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullURLs, setShowFullURLs] = useState(false)
  const [mode, setMode] = useState<'list' | 'grid'>('list')

  return (
    <Box justifyContent="center">
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
    </Box>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {},
}
