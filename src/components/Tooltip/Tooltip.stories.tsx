import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tooltip } from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => {
  return <Tooltip {...args} />
}

export const Default = Template.bind({})
Default.args = {
  message: 'Hello, world!',
  children: <button>Hover me</button>
}
