import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '../Card/Card.js'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './Carousel.js'

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta<typeof Carousel>

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => {
    return (
      <div className="w-full flex justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  },
  args: {},
}
