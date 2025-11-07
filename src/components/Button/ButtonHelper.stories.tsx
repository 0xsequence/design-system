import type { Meta, StoryObj } from '@storybook/react-vite'

import { ArrowRightIcon, ScanIcon } from '../../icons/index.js'
import { Badge } from '../Badge/Badge.js'

import { Button } from './Button.js'

export default {
  title: 'Components/Buttons/ButtonHelper',
  component: Button.Helper,
} as Meta<typeof Button.Helper>

type Story = StoryObj<typeof Button.Helper>

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
    variant: 'secondary',
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Click me',
    size: 'md',
    variant: 'secondary',
  },
}

export const WithLeftIcon: Story = {
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    leftIcon: ScanIcon,
    size: 'md',
    variant: 'secondary',
  },
}

export const WithRightIcon: Story = {
  args: {
    disabled: false,
    label: 'Click me',
    onClick: () => console.log('Clicked!'),
    rightIcon: ArrowRightIcon,
    size: 'md',
    variant: 'secondary',
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
    variant: 'secondary',
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
    variant: 'secondary',
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
