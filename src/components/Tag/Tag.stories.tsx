import { StoryObj, Meta } from '@storybook/react'

import { SettingsIcon } from '~/icons'

import { Tag } from './Tag'

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
