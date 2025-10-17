import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './Checkbox.js'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    size: 'sm',
    disabled: false,
  },
}
