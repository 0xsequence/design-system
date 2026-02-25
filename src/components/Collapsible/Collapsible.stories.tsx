import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Card } from '../Card/Card.js'
import { Text } from '../Text/Text.js'

import { Collapsible } from './Collapsible.js'

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
} as Meta<typeof Collapsible>

type Story = StoryObj<typeof Collapsible>

const CollapsibleStory = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Collapsible
      open={isOpen}
      label="My Heading"
      onOpenChange={open => setIsOpen(open)}
    >
      {[1, 2, 3, 4, 5].map(x => (
        <Text variant="normal" color="secondary" key={x} render={<p />}>
          Item {x}
        </Text>
      ))}
    </Collapsible>
  )
}

export const Default: Story = {
  args: {
    label: 'My Heading',
    children: (
      <Card>
        {[1, 2, 3, 4, 5].map(x => (
          <Text variant="normal" color="secondary" key={x} render={<p />}>
            Item {x}
          </Text>
        ))}
      </Card>
    ),
    variant: 'default',
  },
}

export const Controlled: Story = {
  render: () => <CollapsibleStory />,
}
