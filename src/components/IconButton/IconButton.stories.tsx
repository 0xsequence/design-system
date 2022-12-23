import { StoryObj, Meta } from '@storybook/react'

import { ArrowRightIcon } from '~/icons'

import { IconButton } from './IconButton'

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
    variant: 'glass',
  },
}
