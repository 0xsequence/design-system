import { StoryObj, Meta } from '@storybook/react'

import { Badge } from '~/components/Badge'
import { ArrowRightIcon, ScanIcon } from '~/icons'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const LabelOnly: Story = {
  args: {
    disabled: false,
    label: 'Click me',
    size: 'md',
    variant: 'glass',
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Click me',
    size: 'md',
    variant: 'glass',
  },
}

export const WithLeftIcon: Story = {
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    leftIcon: ScanIcon,
    size: 'md',
    variant: 'glass',
  },
}

export const WithRightIcon: Story = {
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    rightIcon: ArrowRightIcon,
    size: 'md',
    variant: 'glass',
  },
}

export const WithBothIcon: Story = {
  args: {
    disabled: false,
    label: 'Click me',
    leftIcon: ScanIcon,
    onClick: () => console.log('Clicked!'),
    rightIcon: ArrowRightIcon,
    size: 'md',
    variant: 'glass',
  },
}
export const WithCountIcon: Story = {
  args: {
    disabled: false,
    label: (
      <div className="flex items-center gap-1">
        Click me
        <Badge value="3" />
      </div>
    ),
    onClick: () => console.log('Clicked!'),
    leftIcon: ScanIcon,
    size: 'md',
    variant: 'glass',
  },
}

export const AnchorButton: Story = {
  args: {
    label: 'Click me',
    leftIcon: ScanIcon,
    size: 'md',
    asChild: true,
    children: <a href="/wallet" />,
  },
}
