import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './Spinner.js'

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {
    size: 'md',
  },
}

export const PendingSpinner: Story = {
  args: {
    size: 'md',
    className: 'text-warning',
  },
}
