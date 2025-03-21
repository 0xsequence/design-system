import { StoryObj, Meta } from '@storybook/react'

import { SettingsIcon } from '~/icons'

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
