import { StoryObj, Meta } from '@storybook/react'

import { Checkbox } from './Checkbox'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'This is the label (CheckmarkIcon is missing)',
    labelLocation: 'right',
    size: 'sm',
    disabled: false,
  },
}
