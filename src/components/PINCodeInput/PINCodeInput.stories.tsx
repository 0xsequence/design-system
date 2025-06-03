import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { PINCodeInput } from './PINCodeInput.js'

export default {
  title: 'Forms/PINCodeInput',
  component: PINCodeInput,
} as Meta<typeof PINCodeInput>

type Story = StoryObj<typeof PINCodeInput>

const StoryWrapper: StoryFn<typeof PINCodeInput> = args => {
  const [pinCode, setPINCode] = useState([])

  return (
    <>
      <PINCodeInput {...(args as any)} onChange={setPINCode} value={pinCode} />
    </>
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {
    digits: 6,
  },
}
