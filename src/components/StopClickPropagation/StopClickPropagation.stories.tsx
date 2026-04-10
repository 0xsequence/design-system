import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import { ArrowRightIcon } from 'lucide-react'

import { Button } from '../Button/Button.js'

import { StopClickPropagation } from './StopClickPropagation.js'

export default {
  title: 'Utilities/StopClickPropagation',
  component: StopClickPropagation,
} as Meta<typeof StopClickPropagation>

type Story = StoryObj<typeof StopClickPropagation>

const StoryWrapper: StoryFn<typeof StopClickPropagation> = () => {
  return (
    <div
      className="flex items-center bg-background-secondary hover:opacity-80 rounded-xl cursor-pointer justify-between p-4"
      onClick={() => console.log('Container Clicked!!')}
    >
      <div className="text-sm text-primary">
        This container here has a click action. The button on the right also has
        a click action. Since the button is wrapped in a StopClickPropagation
        component, the click-through is prevented.
      </div>

      <StopClickPropagation>
        <Button
          iconOnly
          onClick={() => console.log('Button Clicked! Propagation Stopped!')}
        >
          <ArrowRightIcon />
        </Button>
      </StopClickPropagation>
    </div>
  )
}

export const Default: Story = {
  render: StoryWrapper,
}
