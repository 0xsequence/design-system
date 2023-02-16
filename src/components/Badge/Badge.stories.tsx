import { StoryObj, Meta } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const SingleCharacter: Story = {
  args: {
    value: '3',
    variant: 'info',
  },
}

export const MultiCharacter: Story = {
  args: {
    value: '2713',
    variant: 'success',
  },
}
