import { StoryObj, Meta } from '@storybook/react'

import { Text } from '~/components'

import { Collapsible } from './Collapsible'

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
} as Meta<typeof Collapsible>

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => (
      <Text variant="normal" as="p" color="text80" key={x}>
        Item {x}
      </Text>
    )),
  },
}
