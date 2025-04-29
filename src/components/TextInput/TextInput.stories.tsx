import { StoryObj, Meta } from '@storybook/react'

import { Button } from '~/components/Button'
import { IconButton } from '~/components/IconButton'
import { ArrowRightIcon, CloseIcon, ScanIcon, SearchIcon } from '~/icons'

import { TextInput } from './TextInput'

export default {
  title: 'Forms/TextInput',
  component: TextInput,
} as Meta<typeof TextInput>

type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  args: {
    label: 'This the label',
    description: 'This is the description',
    placeholder: 'This is the placeholder',
    labelLocation: 'top',
    disabled: false,
  },
}
export const WithLeftIcon: Story = {
  args: {
    label: 'This the label',
    placeholder: 'This is the placeholder',
    leftIcon: ScanIcon,
  },
}
export const WithRightIcon: Story = {
  args: {
    label: 'This the label',
    placeholder: 'This is the placeholder',
    rightIcon: ArrowRightIcon,
  },
}
export const WithBothIcons: Story = {
  args: {
    label: 'This the label',
    placeholder: 'This is the placeholder',
    leftIcon: ScanIcon,
    rightIcon: ArrowRightIcon,
  },
}
export const SearchInput: Story = {
  args: {
    placeholder: 'Search for coins or collectibles',
    leftIcon: SearchIcon,
    controls: <IconButton icon={CloseIcon} size="xs" />,
  },
}
export const Error: Story = {
  args: {
    label: 'This the label',
    placeholder: 'This is the placeholder',
    error: 'This is the error',
  },
}

export const WithComplexControls: Story = {
  args: {
    label: 'This the label',
    placeholder: 'This is the placeholder',
    controls: (
      <div className="flex gap-2">
        <Button label="Max" size="xs" shape="square" disabled />
        <Button label="Paste" size="xs" shape="square" />
      </div>
    ),
  },
}
