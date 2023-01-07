import { StoryObj, Meta, StoryFn } from '@storybook/react'

import { Box } from '~/components/Box'
import { IconButton } from '~/components/IconButton'
import { Text } from '~/components/Text'
import { ArrowRightIcon } from '~/icons'

import { StopClickPropagation } from './StopClickPropagation'

export default {
  title: 'Components/StopClickPropagation',
  component: StopClickPropagation,
} as Meta<typeof StopClickPropagation>

type Story = StoryObj<typeof StopClickPropagation>

const StoryWrapper: StoryFn<typeof StopClickPropagation> = () => {
  return (
    <Box
      alignItems="center"
      background={{ base: 'backgroundSecondary', hover: 'backgroundBackdrop' }}
      borderRadius="md"
      cursor="pointer"
      flexDirection="row"
      justifyContent="space-between"
      onClick={() => console.log('Container Clicked!!')}
      padding="4"
    >
      <Box>
        <Text as="p" fontWeight="medium">
          This container here has a click action.
        </Text>
        <Text as="p" fontWeight="medium">
          The button on the right also has a click action.
        </Text>
        <Text as="p" fontWeight="medium">
          Since the button is wrapped in a StopClickPropagation component, the
          click-through is prevented.
        </Text>
      </Box>

      <StopClickPropagation>
        <IconButton
          icon={ArrowRightIcon}
          onClick={() => console.log('Button Clicked! Propagation Stopped!')}
        />
      </StopClickPropagation>
    </Box>
  )
}

export const Default: Story = {
  render: StoryWrapper,
}
