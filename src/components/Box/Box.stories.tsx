import { StoryObj, Meta } from '@storybook/react'

import { tokens } from '~/tokens'

import { Box } from './Box'

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    padding: {
      control: 'select',
      options: Object.keys(tokens.space),
    },
  },
} as Meta<typeof Box>

type Story = StoryObj<typeof Box>

export const Default: Story = {
  args: {
    padding: '4',
    background: 'backgroundSecondary',
    borderRadius: 'md',
    color: 'text100',
    children: 'Hello',
  },
}
