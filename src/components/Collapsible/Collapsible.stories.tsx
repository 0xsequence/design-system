import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'

import { Text } from '~/components/Text/index.js'

import { Collapsible } from './Collapsible.js'

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
} as Meta<typeof Collapsible>

type Story = StoryObj<typeof Collapsible>

const CollapsibleStory = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <Collapsible
      open={isOpen}
      label="My Heading"
      onOpenChange={open => setIsOpen(open)}
    >
      {[1, 2, 3, 4, 5].map(x => (
        <Text variant="normal" color="secondary" key={x} asChild>
          <p>Item {x}</p>
        </Text>
      ))}
    </Collapsible>
  )
}

export const Default: Story = {
  args: {
    label: 'My Heading',
    children: [1, 2, 3, 4, 5].map(x => (
      <Text variant="normal" color="secondary" key={x} asChild>
        <p>Item {x}</p>
      </Text>
    )),
  },
}

export const Controlled: Story = {
  render: () => <CollapsibleStory />,
}
