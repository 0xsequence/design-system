import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'Components/Text',
  component: Text
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => {
  return <Text {...args} />
}

export const Heading1 = Template.bind({})
Heading1.args = {
  type: 'h1',
  children: 'Hello, world!'
}

export const Heading2 = Template.bind({})
Heading2.args = {
  type: 'h2',
  children: 'Hello, world!'
}

export const Heading3 = Template.bind({})
Heading3.args = {
  type: 'h3',
  children: 'Hello, world!'
}

export const Body1 = Template.bind({})
Body1.args = {
  type: 'b1',
  children: 'Hello, world!'
}

export const Body2 = Template.bind({})
Body2.args = {
  type: 'b2',
  children: 'Hello, world!'
}

export const Body3 = Template.bind({})
Body3.args = {
  type: 'b3',
  children: 'Hello, world!'
}

export const Body4 = Template.bind({})
Body4.args = {
  type: 'b4',
  children: 'Hello, world!'
}
