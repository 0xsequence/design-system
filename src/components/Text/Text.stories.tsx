import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './Text.js'

export default {
  title: 'Components/Text',
  component: Text,
} as Meta<typeof Text>

type Story = StoryObj<typeof Text>

export const Heading1: Story = {
  args: {
    variant: 'xlarge',
    color: 'primary',
    children: 'Hello, world!',
  },
}
export const Heading2: Story = {
  args: {
    variant: 'large',
    color: 'primary',
    children: 'Hello, world!',
  },
}
export const Heading3: Story = {
  args: {
    variant: 'medium',
    color: 'primary',
    children: 'Hello, world!',
  },
}
export const Bold: Story = {
  args: {
    variant: 'normal',
    color: 'primary',
    fontWeight: 'bold',
    children: 'Hello, world!',
  },
}
export const BodyLarge: Story = {
  args: {
    variant: 'large',
    color: 'primary',
    children: 'Hello, world!',
  },
}
export const Body: Story = {
  args: {
    variant: 'normal',
    color: 'primary',
    children: 'Hello, world!',
  },
}
export const TextAsChild: Story = {
  args: {
    variant: 'normal',
    color: 'primary',
    children: (
      <>
        <Text fontWeight="bold" color="positive">
          Hello
        </Text>
        {' World!'}
      </>
    ),
  },
}
export const Code: Story = {
  args: {
    variant: 'code',
    color: 'primary',
    children: 'Hello, world!',
  },
}
