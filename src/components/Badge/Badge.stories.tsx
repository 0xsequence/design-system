import { StoryFn, Meta } from '@storybook/react'

import { CloseIcon } from '~/icons'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = args => {
  return <Badge {...args} />
}

export const SingleCharacter = Template.bind({})
SingleCharacter.args = {
  value: '3',
  variant: 'info',
}

export const MultiCharacter = Template.bind({})
MultiCharacter.args = {
  value: '2713',
  variant: 'success',
}

export const Icon = Template.bind({})
Icon.args = {
  value: <CloseIcon />,
  variant: 'error',
  size: 'lg',
}
