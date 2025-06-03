import type { Meta, StoryObj } from '@storybook/react-vite'

import { Progress } from './Progress.js'

export default {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
} as Meta<typeof Progress>

type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 0.5,
  },
}
