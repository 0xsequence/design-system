import { StoryFn, Meta } from '@storybook/react'

import { Checkbox } from './Checkbox'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = args => {
  return <Checkbox {...args} />
}

export const Demo = Template.bind({})
Demo.args = {
  label: 'This is the label (CheckmarkIcon is missing)',
  labelLocation: 'right',
  size: 'sm',
  disabled: false,
}
