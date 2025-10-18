import type { Meta, StoryObj } from '@storybook/react-vite'

import { Field } from './Field.js'

export default {
  title: 'Forms/Field',
  component: Field,
} as Meta<typeof Field>

type Story = StoryObj<typeof Field>

export const Default: Story = {
  args: {
    labelLocation: 'top',
    label: 'Field label',
    description: 'Field description',
    trailDescription: 'Field trail description',
    error: 'Field error',
    disabled: false,
    required: false,
  },
}
