import type { Meta, StoryObj } from '@storybook/react-vite'
import InfoIcon from 'src/icons/InfoIcon.js'

import { Badge } from './Badge.js'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const SingleCharacter: Story = {
  args: {
    children: '3',
    variant: 'default',
    size: 'default',
  },
}

export const MultiCharacter: Story = {
  args: {
    children: '2713',
    variant: 'success',
  },
}

export const AllVariants: Story = {
  render: args => (
    <div className="flex gap-4">
      <Badge variant="default" {...args}>
        <InfoIcon />
        Default
      </Badge>
      <Badge variant="neutral" {...args}>
        <InfoIcon />
        Neutral
      </Badge>
      <Badge variant="outline" {...args}>
        <InfoIcon />
        Outline
      </Badge>
      <Badge variant="info" {...args}>
        <InfoIcon />
        Info
      </Badge>
      <Badge variant="warning" {...args}>
        <InfoIcon />
        Warning
      </Badge>
      <Badge variant="success" {...args}>
        <InfoIcon />
        Success
      </Badge>
      <Badge variant="error" {...args}>
        <InfoIcon />
        Error
      </Badge>
    </div>
  ),
  args: {
    size: 'default',
  },
}
