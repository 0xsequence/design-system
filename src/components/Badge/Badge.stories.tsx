import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from './Badge.js'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const SingleCharacter: Story = {
  args: {
    children: '3',
    variant: 'info',
  },
}

export const MultiCharacter: Story = {
  args: {
    children: '2713',
    variant: 'success',
  },
}
