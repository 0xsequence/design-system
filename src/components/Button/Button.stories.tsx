import { StoryObj, Meta } from '@storybook/react'

import { Badge } from '~/components/Badge'
import { ArrowRightIcon, ScanIcon } from '~/icons'

import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Click me',
    variant: 'primary',
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
