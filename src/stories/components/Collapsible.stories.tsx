import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Collapsible } from '../../components'

export default {
  title: 'Components/Collapsible',
  component: Collapsible
} as ComponentMeta<typeof Collapsible>

const Template: ComponentStory<typeof Collapsible> = args => <Collapsible {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'My Heading',
  children: [1, 2, 3, 4, 5].map(x => <div key={x}>Item {x}</div>)
}
