import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup } from './RadioGroup.js'

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
} as Meta<typeof RadioGroup>

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    size: 'sm',
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
        label: 'Option 4',
        value: 'option-4',
        disabled: true,
      },
    ],
  },
}
