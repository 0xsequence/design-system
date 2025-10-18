import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowRightIcon, ScanIcon, WalletIcon } from '../../icons/index.js'

import { Button } from './Button.js'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
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

export const LabelOnly: Story = {
  args: {
    disabled: false,
    children: 'Click me',
    size: 'md',
    variant: 'secondary',
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Click me',
    size: 'md',
    variant: 'secondary',
  },
}

export const WithLeftIcon: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <ScanIcon />
        Click me
      </>
    ),
    onClick: () => console.log('Clicked!'),
    size: 'md',
    variant: 'secondary',
  },
}

export const WithRightIcon: Story = {
  args: {
    disabled: false,
    children: (
      <>
        Click me
        <ArrowRightIcon />
      </>
    ),
    onClick: () => console.log('Clicked!'),
    size: 'md',
    variant: 'secondary',
  },
}

export const WithBothIcon: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <ScanIcon />
        Click me
        <ArrowRightIcon />
      </>
    ),
    onClick: () => console.log('Clicked!'),
    size: 'md',
    variant: 'secondary',
  },
}

export const IconButton: Story = {
  args: {
    size: 'sm',
    variant: 'secondary',
    children: <WalletIcon size="sm" />,
    disabled: false,
  },
}

export const AnchorButton: Story = {
  args: {
    size: 'md',
    asChild: true,
    children: <a href="/wallet">Click me</a>,
    disabled: false,
  },
}
