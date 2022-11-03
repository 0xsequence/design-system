import { ComponentStory, ComponentMeta } from '@storybook/react'

import { GearIcon } from '~/icons'

import { Pill } from './Pill'

export default {
  title: 'Components/Pill',
  component: Pill,
} as ComponentMeta<typeof Pill>

const Template: ComponentStory<typeof Pill> = args => {
  return <Pill {...args} />
}

export const Base = Template.bind({})
Base.args = {
  color: 'white',
  background: 'positive',
  children: 'Static Pill',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  color: 'white',
  background: 'negative',
  children: (
    <>
      <GearIcon />
      {`With an icon`}
    </>
  ),
}
