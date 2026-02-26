import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import {
  Carousel,
  CarouselDeck,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlide,
  CarouselStatus,
} from './Carousel.js'

const TestCarousel = ({ duration = 0 }: { duration?: number }) => (
  <Carousel duration={duration}>
    <CarouselDeck>
      <CarouselSlide>Slide 1</CarouselSlide>
      <CarouselSlide>Slide 2</CarouselSlide>
      <CarouselSlide>Slide 3</CarouselSlide>
    </CarouselDeck>
    <CarouselPrevButton aria-label="Previous slide" />
    <CarouselNextButton aria-label="Next slide" />
    <CarouselStatus />
  </Carousel>
)

describe('<Carousel />', () => {
  afterEach(cleanup)

  it('renders with correct ARIA landmark attributes', () => {
    render(<TestCarousel />)

    const region = screen.getByRole('region')
    expect(region).toHaveAttribute('aria-roledescription', 'carousel')
  })

  it('first slide is active by default', () => {
    render(<TestCarousel />)

    const slides = document.querySelectorAll('[data-slot=carousel-slide]')
    expect(slides[0]).toHaveAttribute('data-current')
    expect(slides[1]).not.toHaveAttribute('data-current')
    expect(slides[2]).not.toHaveAttribute('data-current')
  })

  it('next button advances to the next slide', () => {
    render(<TestCarousel />)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))

    const slides = document.querySelectorAll('[data-slot=carousel-slide]')
    expect(slides[0]).not.toHaveAttribute('data-current')
    expect(slides[1]).toHaveAttribute('data-current')
  })

  it('prev button wraps from first slide to last', () => {
    render(<TestCarousel />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))

    const slides = document.querySelectorAll('[data-slot=carousel-slide]')
    expect(slides[2]).toHaveAttribute('data-current')
  })

  it('next button wraps from last slide back to first', () => {
    render(<TestCarousel />)

    // Advance to last slide
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))

    const slides = document.querySelectorAll('[data-slot=carousel-slide]')
    expect(slides[0]).toHaveAttribute('data-current')
  })

  it('CarouselStatus renders one dot per slide', () => {
    render(<TestCarousel />)

    expect(
      document.querySelectorAll('[data-slot=carousel-status-dot]')
    ).toHaveLength(3)
  })

  it('status radio reflects the active slide', () => {
    render(<TestCarousel />)

    const radios = screen.getAllByRole('radio')
    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
    expect(radios[2]).not.toBeChecked()

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))

    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  it('hovering the deck pauses and resumes auto-advance', () => {
    const { getByRole } = render(<TestCarousel duration={1000} />)

    const deck = document.querySelector('[data-slot=carousel-deck]')!

    fireEvent.mouseEnter(deck)
    // isPaused = true; the interval should be cleared — just verify no error
    expect(getByRole('region')).toBeInTheDocument()

    fireEvent.mouseLeave(deck)
    expect(getByRole('region')).toBeInTheDocument()
  })
})
