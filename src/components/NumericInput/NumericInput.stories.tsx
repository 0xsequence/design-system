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
  args: {
    label: 'This the label',
    description: 'This is the description',
    labelLocation: 'top',
  },
}

export const WithDecimalRestriction: Story = {
  render: StoryWrapper,
  args: {
    label: 'Amount (2 decimal places max)',
    description:
      'Values with more than 2 decimal places will be truncated. Values automatically adjust when the decimals prop changes. Try pasting: 0.123456',
    labelLocation: 'top',
    decimals: 2,
  },
}

export const IntegerOnly: Story = {
  render: StoryWrapper,
  args: {
    label: 'Integer Only',
    description:
      'Decimal values will be truncated to integers. Try pasting: 1.234',
    labelLocation: 'top',
    decimals: 0,
  },
}
