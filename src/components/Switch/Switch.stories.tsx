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
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}
