import { StoryObj, Meta } from '@storybook/react'

import { Select } from './Select'

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta<typeof Select>

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    onValueChange: value => {
      console.log('selected: ', value)
    },
    name: 'selectDemo',
    label: 'Select',
    description: 'This is a description',
    labelLocation: 'top',
    placeholder: 'Select an option',
    disabled: false,
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
      {
        label: 'Disabled Option',
        value: 'option-4',
        disabled: true,
      },
      {
        label: 'Custom Action',
        value: 'option-5',
      },
    ],
  },
}
