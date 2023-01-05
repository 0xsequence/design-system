import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { NumericInput } from './NumericInput'

export default {
  title: 'Forms/NumericInput',
  component: NumericInput,
} as Meta<typeof NumericInput>

type Story = StoryObj<typeof NumericInput>

const StoryWrapper: StoryFn<typeof NumericInput> = args => {
  const [value, setValue] = useState('')
  return (
    <>
      <NumericInput {...args} value={value} onChange={setValue} />
    </>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {
    label: 'This the label',
    description: 'This is the description',
    labelLocation: 'top',
  },
}
