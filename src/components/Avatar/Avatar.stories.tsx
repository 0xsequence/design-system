import { StoryObj, Meta } from '@storybook/react'

import { Avatar } from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    address: 'casdasfasfkasgfkasgf',
    size: 'md',
  },
}
