import { StoryObj } from '@storybook/react'

import { Divider } from './Divider'

export default {
  title: 'Components/Divider',
  component: 'Divider',
}

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {},
}
