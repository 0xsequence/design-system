import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRightIcon, ScanIcon, SearchIcon, XIcon } from 'lucide-react'

import { Button } from '../Button/Button.js'

import { TextInput } from './TextInput.js'

export default {
  title: 'Forms/TextInput',
  component: TextInput,
} as Meta<typeof TextInput>

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    placeholder: 'This is the placeholder',
    disabled: false,
  },
}
export const WithLeftIcon: Story = {
  args: {
    placeholder: 'This is the placeholder',
    leftIcon: ScanIcon,
  },
}
export const WithRightIcon: Story = {
  args: {
    placeholder: 'This is the placeholder',
    rightIcon: ArrowRightIcon,
  },
}
export const WithBothIcons: Story = {
  args: {
    placeholder: 'This is the placeholder',
    leftIcon: ScanIcon,
    rightIcon: ArrowRightIcon,
  },
}
export const SearchInput: Story = {
  args: {
    placeholder: 'Search for coins or collectibles',
    leftIcon: SearchIcon,
    controls: (
      <Button size="xs" iconOnly>
        <XIcon />
      </Button>
    ),
  },
}
export const Error: Story = {
  args: {
    placeholder: 'This is the placeholder',
    ['aria-invalid']: true,
  },
}

export const WithComplexControls: Story = {
  args: {
    placeholder: 'This is the placeholder',
    controls: (
      <div className="flex gap-2">
        <Button size="xs" disabled>
          Max
        </Button>
        <Button size="xs">Paste</Button>
      </div>
    ),
  },
}
