import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => {
  return <Text color="text100" {...args} />
}

export const Heading1 = Template.bind({})
Heading1.args = {
  variant: 'xlarge',
  children: 'Hello, world!',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  variant: 'large',
  children: 'Hello, world!',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  variant: 'medium',
  children: 'Hello, world!',
}

export const Bold = Template.bind({})
Bold.args = {
  variant: 'normal',
  fontWeight: 'bold',
  children: 'Hello, world!',
}

export const BodyLarge = Template.bind({})
BodyLarge.args = {
  variant: 'large',
  as: 'p',
  children: 'Hello, world!',
}

export const Body = Template.bind({})
Body.args = {
  variant: 'normal',
  children: 'Hello, world!',
}

export const TextAsChild = Template.bind({})
TextAsChild.args = {
  variant: 'normal',
  as: 'p',
  children: (
    <>
      <Text fontWeight="bold" color="positive">
        Hello
      </Text>
      {' World!'}
    </>
  ),
}

export const Code = Template.bind({})
Code.args = {
  variant: 'code',
  children: 'Hello, world!',
}
