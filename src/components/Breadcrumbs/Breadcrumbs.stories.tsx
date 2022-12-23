import { StoryFn, Meta } from '@storybook/react'

import { Breadcrumbs } from './Breadcrumbs'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>

const Template: StoryFn<typeof Breadcrumbs> = args => {
  return <Breadcrumbs {...args} />
}

export const Demo = Template.bind({})
Demo.args = {
  excludeDivider: false,
  paths: [
    { label: 'Home', url: '/' },
    { label: 'Components', url: '/components' },
    { label: 'Breadcrumbs' },
  ],
}
