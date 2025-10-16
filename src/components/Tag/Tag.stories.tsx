import type { Meta, StoryObj } from '@storybook/react-vite'

import { SettingsIcon } from '../../icons/index.js'

import { Tag } from './Tag.js'

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta<typeof Tag>

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    label: 'ERC1155',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'ERC1155',
    icon: SettingsIcon,
  },
}
