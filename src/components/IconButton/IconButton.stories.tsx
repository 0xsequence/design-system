import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowRightIcon } from '../../icons/index.js'

import { IconButton } from './IconButton.js'

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
} as Meta<typeof IconButton>

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  render: args => (
    <div className="flex gap-4 flex-wrap">
      <IconButton {...args} variant="primary" />
      <IconButton {...args} variant="secondary" />
      <IconButton {...args} variant="outline" />
      <IconButton {...args} variant="emphasis" />
      <IconButton {...args} variant="glass" />
      <IconButton {...args} variant="ghost" />
      <IconButton {...args} variant="raised" />
      <IconButton {...args} variant="destructive" />
    </div>
  ),
  args: {
    icon: ArrowRightIcon,
    disabled: false,
    size: 'md',
    shape: 'circle',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr/Sequence-Design-System-1.1?node-id=9958-2592&t=JhRreiaffZLZbXKy-4',
    },
  },
}

export const ArrowButton: Story = {
  args: {
    icon: ArrowRightIcon,
    disabled: false,
    size: 'md',
    onClick: () => console.log('ouch!'),
    variant: 'secondary',
  },
}

export const AnchorButton: Story = {
  args: {
    icon: ArrowRightIcon,
    size: 'md',
    variant: 'secondary',
    asChild: true,
    children: <a href="/wallet" />,
  },
}
