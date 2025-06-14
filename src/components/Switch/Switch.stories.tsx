import type { Meta, StoryObj } from '@storybook/react-vite'

import { Switch } from './Switch.js'

export default {
  title: 'Forms/Switch',
  component: Switch,
} as Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Switch Title',
    description: 'Switch Description',
  },
}
