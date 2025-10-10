import type { Meta, StoryObj } from '@storybook/react-vite'

import { Kbd } from './Kbd.js'

export default {
  title: 'Components/Kbd',
  component: Kbd,
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
} as Meta<typeof Kbd>

type Story = StoryObj<typeof Kbd>

export const Default: Story = {
  args: {
    children: '⌘K',
  },
}

export const Ctrl: Story = {
  args: {
    children: 'Ctrl + K',
  },
}
