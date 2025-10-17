import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { NumericInput } from './NumericInput.js'

export default {
  title: 'Forms/NumericInput',
  component: NumericInput,
} as Meta<typeof NumericInput>

type Story = StoryObj<typeof NumericInput>

const StoryWrapper: StoryFn<typeof NumericInput> = args => {
  const [value, setValue] = useState('')
  return (
    <>
      <NumericInput
        value={value}
        onChange={ev => setValue(ev.target.value)}
        {...args}
      />
    </>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {},
}

export const WithDecimalRestriction: Story = {
  render: StoryWrapper,
  args: {
    decimals: 2,
  },
}

export const IntegerOnly: Story = {
  render: StoryWrapper,
  args: {
    decimals: 0,
  },
}
