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
      <Text as="p" fontWeight="medium">
        The container here has a click action. Clicking on the wrapped
        IconButton will prevent click propagation.
      </Text>

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
