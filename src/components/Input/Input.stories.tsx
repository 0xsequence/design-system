import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './Input.js'

export default {
  title: 'Forms/Input',
  component: Input,
} as Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'This is the placeholder',
    disabled: false,
  },
}

export const WithError: Story = {
  args: {
    value: 'invalid value',
    disabled: false,
    ['aria-invalid']: true,
    onChange: () => {},
  },
}
