import { StoryObj, Meta, StoryFn } from '@storybook/react'

import { IconButton } from '~/components/IconButton/index.js'
import { Text } from '~/components/Text/index.js'
import { ArrowRightIcon } from '~/icons/index.js'

import { StopClickPropagation } from './StopClickPropagation.js'

export default {
  title: 'Components/StopClickPropagation',
  component: StopClickPropagation,
} as Meta<typeof StopClickPropagation>

type Story = StoryObj<typeof StopClickPropagation>

const StoryWrapper: StoryFn<typeof StopClickPropagation> = () => {
  return (
    <div
      className="flex items-center bg-background-secondary hover:bg-background-backdrop rounded-xl cursor-pointer justify-between p-4"
      onClick={() => console.log('Container Clicked!!')}
    >
      <div>
        <Text variant="normal" color="secondary">
          This container here has a click action. The button on the right also
          has a click action. Since the button is wrapped in a
          StopClickPropagation component, the click-through is prevented.
        </Text>
      </div>

      <StopClickPropagation>
        <IconButton
          icon={ArrowRightIcon}
          onClick={() => console.log('Button Clicked! Propagation Stopped!')}
        />
      </StopClickPropagation>
    </div>
  )
}

export const Default: Story = {
  render: StoryWrapper,
}
