import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

const Template: ComponentStory<typeof RadioGroup> = args => {
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
  ],
}
