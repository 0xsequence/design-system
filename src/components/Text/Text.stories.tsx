import { StoryObj, Meta } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
} as Meta<typeof Text>

type Story = StoryObj<typeof Text>

export const Heading1: Story = {
  args: {
    variant: 'xlarge',
    color: 'text100',
    children: 'Hello, world!',
  },
}
export const Heading2: Story = {
  args: {
    variant: 'large',
    color: 'text100',
    children: 'Hello, world!',
  },
}
export const Heading3: Story = {
  args: {
    variant: 'medium',
    color: 'text100',
    children: 'Hello, world!',
  },
}
export const Bold: Story = {
  args: {
    variant: 'normal',
    color: 'text100',
    fontWeight: 'bold',
    children: 'Hello, world!',
  },
}
export const BodyLarge: Story = {
  args: {
    variant: 'large',
    color: 'text100',
    as: 'p',
    children: 'Hello, world!',
  },
}
export const Body: Story = {
  args: {
    variant: 'normal',
    color: 'text100',
    children: 'Hello, world!',
  },
}
export const TextAsChild: Story = {
  args: {
    variant: 'normal',
    color: 'text100',
    as: 'p',
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
    color: 'text100',
    children: 'Hello, world!',
  },
}
