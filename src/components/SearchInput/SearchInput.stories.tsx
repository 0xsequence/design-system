import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { SearchInput } from './SearchInput.js'

export default {
  title: 'Forms/SearchInput',
  component: SearchInput,
} as Meta<typeof SearchInput>

type Story = StoryObj<typeof SearchInput>

const StoryWrapper: StoryFn<typeof SearchInput> = args => {
  const [value, setValue] = useState<string>('')

  return (
    <SearchInput
      value={value}
      onChange={ev => setValue(ev.target.value)}
      {...args}
    />
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {
    placeholder: 'Search for coins or collectibles...',
  },
}
