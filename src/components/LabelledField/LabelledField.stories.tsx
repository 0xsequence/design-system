import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextInput } from '../TextInput'

import { LabelledField } from './LabelledField'

export default {
  title: 'Components/Forms/LabelledField',
  component: LabelledField,
} as ComponentMeta<typeof LabelledField>

const Template: ComponentStory<typeof LabelledField> = args => {
  return (
    <LabelledField {...args}>
      <TextInput />
    </LabelledField>
  )
}

export const Base = Template.bind({})
Base.args = {
  labelLocation: 'top',
}
