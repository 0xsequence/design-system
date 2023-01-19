import { StoryObj, Meta } from '@storybook/react'

import { FileInput } from './FileInput'

export default {
  title: 'Forms/FileInput',
  component: FileInput,
} as Meta<typeof FileInput>

type Story = StoryObj<typeof FileInput>

export const Default: Story = {
  args: {
    borderRadius: 'md',
    name: 'myFileInput',
    label: 'File input',
    labelLocation: 'top',
    validExtensions: ['images'],
    onValueChange: file => console.log(file),
  },
}
