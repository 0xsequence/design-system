import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Switch } from './Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = args => {
  return <Switch {...args} />
}

export const Default = Template.bind({})
Default.args = {}
