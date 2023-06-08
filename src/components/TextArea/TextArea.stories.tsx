import { StoryObj, Meta } from '@storybook/react'

import { TextArea } from './TextArea'

export default {
  title: 'Forms/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    borderRadius: 'md',
    label: 'This the label',
    description: 'This is the description',
    placeholder: 'This is the placeholder',
    labelLocation: 'top',
    rows: 3,
    resize: true,
  },
}
