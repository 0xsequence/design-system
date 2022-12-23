import { StoryFn, Meta } from '@storybook/react'

import { Switch } from './Switch'

export default {
  title: 'Forms/Switch',
  component: Switch,
} as Meta<typeof Switch>

const Template: StoryFn<typeof Switch> = args => {
  return <Switch {...args} />
}

export const Default = Template.bind({})
Default.args = {
  disabled: false,
}
