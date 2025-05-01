import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from './TextArea.js'

export default {
  title: 'Forms/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    label: 'This the label',
    description: 'This is the description',
    placeholder: 'This is the placeholder',
    labelLocation: 'top',
    rows: 3,
    resize: true,
  },
}

export const Error: Story = {
  args: {
    name: 'myTextArea',
    label: 'Text area',
    labelLocation: 'top',
    rows: 3,
    resize: true,
    error: 'This is the error',
  },
}
