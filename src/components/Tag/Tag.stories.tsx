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
    background: 'ethereumDark',
    color: 'white',
    icon: SettingsIcon,
    label: 'Static Tag',
  },
}
