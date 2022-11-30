import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from './Checkbox'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => {
  return <Checkbox {...args} />
}

export const Demo = Template.bind({})
Demo.args = {
  label: 'This is the label (CheckmarkIcon is missing)',
  labelLocation: 'right',
  size: 'sm',
}
