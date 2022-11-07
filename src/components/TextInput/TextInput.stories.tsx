import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextInput } from './TextInput'

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = args => {
  return <TextInput {...args} />
}

export const Basic = Template.bind({})
Basic.args = {
  label: 'This the label',
  labelLocation: 'hidden',
  placeholder: 'This is the placeholder',
}

export const TopLabel = Template.bind({})
TopLabel.args = {
  label: 'This the label',
  labelLocation: 'top',
  placeholder: 'This is the placeholder',
}
