import type { Meta, StoryObj } from '@storybook/react-vite'

import { SettingsIcon } from '../icons/index.js'

export default {
  title: 'Components/Icons',
  component: SettingsIcon,
} as Meta<typeof SettingsIcon>

type Story = StoryObj<typeof SettingsIcon>

export const Default: Story = {
  args: {
    className: 'text-primary',
    size: 'md',
  },
}
