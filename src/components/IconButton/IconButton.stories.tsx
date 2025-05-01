import { StoryObj, Meta } from '@storybook/react'

import { ArrowRightIcon } from '~/icons/index.js'

import { IconButton } from './IconButton.js'

export default {
  title: 'Components/IconButton',
  component: IconButton,
} as Meta<typeof IconButton>

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    icon: ArrowRightIcon,
    disabled: false,
    size: 'md',
    onClick: () => console.log('ouch!'),
    variant: 'raised',
  },
}

export const AnchorButton: Story = {
  args: {
    icon: ArrowRightIcon,
    size: 'md',
    asChild: true,
    children: <a href="/wallet" />,
  },
}
