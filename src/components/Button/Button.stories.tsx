import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowRightIcon, ScanIcon, WalletIcon } from '../../icons/index.js'
import { Spinner } from '../Spinner/Spinner.js'

import { Button } from './Button.js'

export default {
  title: 'Components/Buttons/Button',
  component: Button,
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: args => (
    <div className="flex gap-4 items-center flex-wrap">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="emphasis">
        Emphasis
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="text">
        Text
      </Button>
      <Button {...args} variant={null}>
        Null
      </Button>
    </div>
  ),
  args: {
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
        <span>Click me</span>
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
        <ArrowRightIcon className="ml-auto" />
      </>
    ),
    onClick: () => console.log('Clicked!'),
    size: 'md',
    variant: 'secondary',
    className: 'w-full',
  },
}

export const IconOnly: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    children: <WalletIcon />,
    disabled: false,
    iconOnly: true,
  },
}

export const WithAnchor: Story = {
  args: {
    size: 'md',
    render: <a href="/wallet" />,
    children: 'Click me',
    disabled: false,
  },
}

export const WithSpinner: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    children: (
      <>
        Click me
        <Spinner />
      </>
    ),
    disabled: false,
  },
}
