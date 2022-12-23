import { StoryFn, Meta } from '@storybook/react'

import { Spinner } from './Spinner'

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>

const Template: StoryFn<typeof Spinner> = args => {
  return <Spinner {...args} />
}

export const SmallSpinner = Template.bind({})
SmallSpinner.args = {
  size: 'sm',
}

export const MediumSpinner = Template.bind({})
MediumSpinner.args = {
  size: 'md',
}

export const LargeSpinner = Template.bind({})
LargeSpinner.args = {
  size: 'lg',
}
