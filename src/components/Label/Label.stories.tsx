import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from '../Checkbox/Checkbox.js'

import { Label } from './Label.js'

export default {
  title: 'Components/Label',
  component: Label,
} as Meta<typeof Label>

type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'This is a label',
  },
}

export const WithCheckbox = {
  render: () => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    )
  },
}
