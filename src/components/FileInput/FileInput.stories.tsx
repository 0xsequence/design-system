import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileInput } from './FileInput.js'

export default {
  title: 'Forms/FileInput',
  component: FileInput,
} as Meta<typeof FileInput>

type Story = StoryObj<typeof FileInput>

export const Default: Story = {
  args: {
    name: 'myFileInput',
    label: 'File input',
    labelLocation: 'top',
    validExtensions: ['images'],
    onValueChange: file => console.log(file),
  },
}

export const Error: Story = {
  args: {
    name: 'myFileInput',
    label: 'File input',
    labelLocation: 'top',
    validExtensions: ['images'],
    onValueChange: file => console.log(file),
    error: 'This is the error',
  },
}
