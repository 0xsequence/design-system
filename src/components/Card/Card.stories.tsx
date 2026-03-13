import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from './Card.js'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: args => (
    <Card {...args}>
      <div className="flex flex-col">
        <span className="text-xl text-primary">Card</span>
        <span className="text-sm text-muted">Description</span>
      </div>
    </Card>
  ),
  args: {
    variant: 'default',
  },
}
export const Clickable: Story = {
  render: args => (
    <Card {...args}>
      <button>
        <div className="flex flex-col">
          <span className="text-xl text-primary">Card</span>
          <span className="text-sm text-muted">Description</span>
        </div>
      </button>
    </Card>
  ),
  args: {
    clickable: true,
    disabled: false,
    render: <button />,
    onClick: () => console.log('Clicked!'),
  },
}
