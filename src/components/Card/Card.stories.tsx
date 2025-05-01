import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '~/components/Text/index.js'

import { Card } from './Card.js'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="flex flex-col">
          <Text variant="large" color="primary">
            Card
          </Text>
          <Text variant="normal" color="muted">
            Description
          </Text>
        </div>
      </>
    ),
  },
}
export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => console.log('Clicked!'),
    children: (
      <>
        <div className="flex flex-col text-left">
          <Text variant="large" color="primary">
            Card
          </Text>
          <Text variant="normal" color="muted">
            Description
          </Text>
        </div>
      </>
    ),
  },
}
export const Disabled: Story = {
  args: {
    clickable: true,
    disabled: true,
    children: (
      <>
        <div className="flex flex-col text-left">
          <Text variant="large" color="primary">
            Card
          </Text>
          <Text variant="normal" color="muted">
            Description
          </Text>
        </div>
      </>
    ),
  },
}
export const Outlined: Story = {
  args: {
    outlined: true,
    children: (
      <>
        <div className="flex flex-col">
          <Text variant="large" color="primary">
            Card
          </Text>
          <Text variant="normal" color="muted">
            Description
          </Text>
        </div>
      </>
    ),
  },
}
