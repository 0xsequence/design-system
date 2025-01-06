import { StoryObj, Meta, StoryFn } from '@storybook/react'

import { Box } from '~/components/Box'
import { Card } from '~/components/Card'
import { Text } from '~/components/Text'

import { Scroll } from './Scroll'

export default {
  title: 'Components/Scroll',
  component: Scroll,
} as Meta<typeof Scroll>

type Story = StoryObj<typeof Scroll>

const StoryWrapper: StoryFn<typeof Scroll> = args => (
  <Card
    outlined
    className="overflow-hidden p-0"
    style={{
      width: 200,
      height: 200,
    }}
  >
    <Scroll {...args} />
  </Card>
)

const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

export const VerticalScroll: Story = {
  render: StoryWrapper,
  args: {
    direction: 'vertical',
    shadows: true,
    children: (
      <Box padding="4" flexDirection="column" gap="4" alignItems="center">
        {ALPHABET.map(letter => (
          <Box key={letter}>
            <Text color="text100" variant="xlarge">
              {letter}
            </Text>
          </Box>
        ))}
      </Box>
    ),
  },
}

export const HorizontalScroll: Story = {
  render: StoryWrapper,
  args: {
    direction: 'horizontal',
    shadows: true,
    children: (
      <Box padding="4" gap="4" alignItems="center" height="full" width="max">
        {ALPHABET.map(letter => (
          <Box key={letter}>
            <Text color="text100" variant="xlarge">
              {letter}
            </Text>
          </Box>
        ))}
      </Box>
    ),
  },
}
