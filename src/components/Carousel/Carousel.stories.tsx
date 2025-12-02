import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '../Card/Card.js'

import * as Carousel from './Carousel.js'

export default {
  title: 'Components/Carousel',
  component: Carousel.Carousel,
} as Meta<typeof Carousel.Carousel>

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => {
    return (
      <Carousel.Carousel count={5} duration={4000}>
        <div className="w-full flex flex-col items-center flex-1 justify-center gap-4">
          <div className="max-w-3xl w-full flex flex-col gap-4">
            <div className="flex justify-between gap-4 w-full items-center">
              <h2 className="text-20 font-bold">Default Carousel</h2>

              <div className="flex gap-4 items-center">
                <Carousel.CarouselPrevButton />
                <Carousel.CarouselNextButton />
              </div>
            </div>
            <Carousel.CarouselDeck>
              {current =>
                Array.from({ length: 5 }).map((_, index) => (
                  <Carousel.CarouselSlide
                    key={index}
                    index={index}
                    current={current}
                  >
                    <div className="p-1">
                      <Card className="flex aspect-video items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </Card>
                    </div>
                  </Carousel.CarouselSlide>
                ))
              }
            </Carousel.CarouselDeck>
          </div>
          <Carousel.CarouselStatus />
        </div>
      </Carousel.Carousel>
    )
  },
  args: {},
}

export const Small: Story = {
  render: () => {
    return (
      <Carousel.Carousel count={5} duration={4000}>
        <div className="w-full flex flex-col items-center flex-1 justify-center gap-4">
          <div className="max-w-lg w-full">
            <Carousel.CarouselDeck>
              {current =>
                Array.from({ length: 5 }).map((_, index) => (
                  <Carousel.CarouselSlide
                    key={index}
                    current={current}
                    index={index}
                  >
                    <div className="p-1">
                      <Card className="flex aspect-video items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </Card>
                    </div>
                  </Carousel.CarouselSlide>
                ))
              }
            </Carousel.CarouselDeck>
          </div>
          <div className="flex gap-4 items-center">
            <Carousel.CarouselPrevButton variant="small" />
            <Carousel.CarouselStatus />
            <Carousel.CarouselNextButton variant="small" />
          </div>
        </div>
      </Carousel.Carousel>
    )
  },
  args: {},
}
