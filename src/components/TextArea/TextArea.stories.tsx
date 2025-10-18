import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextArea } from './TextArea.js'

export default {
  title: 'Forms/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    placeholder: 'Enter message...',
    rows: 3,
    resize: false,
    ['aria-invalid']: false,
    disabled: false,
  },
}

export const Error: Story = {
  args: {
    rows: 3,
    placeholder: 'Enter message...',
    resize: false,
    ['aria-invalid']: true,
  },
}
