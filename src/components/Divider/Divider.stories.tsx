import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from './Divider.js'

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta<typeof Divider>

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  args: {},
}
