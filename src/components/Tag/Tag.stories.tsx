import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SettingsIcon } from '~/icons'

import { Tag } from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => {
  return <Tag {...args} />
}

export const Base = Template.bind({})
Base.args = {
  background: 'ethereumDark',
  color: 'white',
  icon: SettingsIcon,
  label: 'Static Tag',
}
