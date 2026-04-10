import type { Meta, StoryObj } from '@storybook/react-vite'
import { SettingsIcon } from 'lucide-react'

import { Tag } from './Tag.js'

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta<typeof Tag>

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    children: 'ERC1155',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <SettingsIcon className="size-3" />
        ERC1155
      </>
    ),
  },
}
