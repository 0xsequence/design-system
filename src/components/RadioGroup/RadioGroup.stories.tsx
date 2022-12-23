import { StoryFn, Meta } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
} as Meta<typeof RadioGroup>

const Template: StoryFn<typeof RadioGroup> = args => {
  return <RadioGroup {...args} />
}

export const Demo = Template.bind({})
Demo.args = {
  size: 'sm',
  flexDirection: 'column',
  gap: '4',
  options: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
    { label: 'Option 4', value: 'option-4', disabled: true },
  ],
}
