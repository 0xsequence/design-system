import type { Meta, StoryObj } from '@storybook/react-vite'

import { ChevronLeftIcon, ChevronRightIcon } from '../../icons/index.js'
import { Card } from '../Card/Card.js'

import {
  Carousel,
  CarouselDeck,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlide,
  CarouselStatus,
} from './Carousel.js'

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
                <CarouselPrevButton />
                <CarouselNextButton />
              </div>
            </div>
            <CarouselDeck>
              {current =>
                Array.from({ length: 5 }).map((_, index) => (
                  <CarouselSlide key={index} index={index} current={current}>
                    <div className="p-1">
                      <Card className="flex aspect-video items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </Card>
                    </div>
                  </CarouselSlide>
                ))
              }
            </CarouselDeck>
          </div>
          <CarouselStatus />
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
            <CarouselDeck>
              {current =>
                Array.from({ length: 5 }).map((_, index) => (
                  <CarouselSlide key={index} current={current} index={index}>
                    <div className="p-1">
                      <Card className="flex aspect-video items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </Card>
                    </div>
                  </CarouselSlide>
                ))
              }
            </CarouselDeck>
          </div>
          <div className="flex gap-4 items-center">
            <CarouselPrevButton variant="ghost" size="xs">
              <ChevronLeftIcon />
            </CarouselPrevButton>
            <CarouselStatus />
            <CarouselNextButton variant="ghost" size="xs">
              <ChevronRightIcon />
            </CarouselNextButton>
          </div>
        </div>
      </Carousel>
    )
  },
  args: {},
}
