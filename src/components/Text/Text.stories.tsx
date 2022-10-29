import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => {
  return <Text {...args} />
}

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: 'h1',
  children: 'Hello, world!',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  variant: 'h2',
  children: 'Hello, world!',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  variant: 'h3',
  children: 'Hello, world!',
}

export const Bold = Template.bind({})
Bold.args = {
  variant: 'p',
  weight: 'bold',
  color: 'title',
  children: 'Hello, world!',
}

export const BodyLarge = Template.bind({})
BodyLarge.args = {
  variant: 'p',
  size: 'large',
  children: 'Hello, world!',
}

export const Body = Template.bind({})
Body.args = {
  variant: 'p',
  children: 'Hello, world!',
}

export const Code = Template.bind({})
Code.args = {
  variant: 'code',
  children: 'Hello, world!',
}
