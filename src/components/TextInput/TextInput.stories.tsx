import { StoryObj, Meta } from '@storybook/react'

import { Box, Button, IconButton } from '~/components'
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
export const WithComplexControls: Story = {
  args: {
    label: 'This the label',
    placeholder: 'This is the placeholder',
    controls: (
      <Box gap="2">
        <Button label="Max" size="xs" shape="square" />
        <Button label="Paste" size="xs" shape="square" />
      </Box>
    ),
  },
}
