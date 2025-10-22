import type { Meta, StoryObj } from '@storybook/react-vite'

import { Text } from '../Text/Text.js'

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
        <Text variant="large" color="primary">
          Card
        </Text>
        <Text variant="normal" color="muted">
          Description
        </Text>
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
          <Text variant="large" color="primary">
            Card
          </Text>
          <Text variant="normal" color="muted">
            Description
          </Text>
        </div>
      </button>
    </Card>
  ),
  args: {
    clickable: true,
    disabled: false,
    asChild: true,
    onClick: () => console.log('Clicked!'),
  },
}
