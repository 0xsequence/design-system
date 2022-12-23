import { StoryObj, Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { SearchInput } from './SearchInput'

export default {
  title: 'Forms/SearchInput',
  component: SearchInput,
} as Meta<typeof SearchInput>

type Story = StoryObj<typeof SearchInput>

const StoryWrapper: StoryFn<typeof SearchInput> = args => {
  const [value, setValue] = useState<string>('')

  return (
    <SearchInput
      id="myInput"
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

export const Default: Story = {
  render: StoryWrapper,
  args: {
    label: 'Search',
    labelLocation: 'top',
    placeholder: 'This is the placeholder',
  },
}
