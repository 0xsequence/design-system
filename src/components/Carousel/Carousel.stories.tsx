import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '../Card/Card.js'

import { Carousel } from './Carousel.js'

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta<typeof Carousel>

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => {
    return (
      <Carousel count={5} duration={4000}>
        <div className="w-full flex flex-col items-center flex-1 justify-center gap-4">
          <div className="max-w-3xl w-full flex flex-col gap-4">
            <div className="flex justify-between gap-4 w-full items-center">
              <h2 className="text-20 font-bold">Default Carousel</h2>

              <div className="flex gap-4 items-center">
                <Carousel.PrevButton />
                <Carousel.NextButton />
              </div>
            </div>
            <Carousel.Deck>
              {current =>
                Array.from({ length: 5 }).map((_, index) => (
                  <Carousel.Slide key={index} index={index} current={current}>
                    <div className="p-1">
                      <Card className="flex aspect-video items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </Card>
                    </div>
                  </Carousel.Slide>
                ))
              }
            </Carousel.Deck>
          </div>
          <Carousel.Status />
        </div>
      </Carousel>
    )
  },
  args: {},
}

export const Small: Story = {
  render: () => {
    return (
      <Carousel count={5} duration={4000}>
        <div className="w-full flex flex-col items-center flex-1 justify-center gap-4">
          <div className="max-w-lg w-full">
            <Carousel.Deck>
              {current =>
                Array.from({ length: 5 }).map((_, index) => (
                  <Carousel.Slide key={index} current={current} index={index}>
                    <div className="p-1">
                      <Card className="flex aspect-video items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </Card>
                    </div>
                  </Carousel.Slide>
                ))
              }
            </Carousel.Deck>
          </div>
          <div className="flex gap-4 items-center">
            <Carousel.PrevButton variant="small" />
            <Carousel.Status />
            <Carousel.NextButton variant="small" />
          </div>
        </div>
      </Carousel>
    )
  },
  args: {},
}
