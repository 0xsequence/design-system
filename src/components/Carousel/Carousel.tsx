import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useId,
  useState,
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
} from 'react'

import { useTransitionState } from '../../hooks/useTransitionState.js'
import ArrowLeftIcon from '../../icons/ArrowLeftIcon.js'
import ArrowRightIcon from '../../icons/ArrowRightIcon.js'
import { cn } from '../../utils/classnames.js'
import { Button } from '../Button/Button.js'

interface CarouselContext {
  prevSlide: () => void
  nextSlide: () => void
  setSlide: (index: number) => void
  totalSlides: number
  currentSlide: number
  autoAdvance: boolean
  duration: number
  isPaused: boolean
  setTotalSlides: Dispatch<SetStateAction<number>>
  setPaused: Dispatch<SetStateAction<boolean>>
  direction: 'ltr' | 'rtl'
  /** Unique id for this carousel instance (e.g. for radio group name) */
  carouselId: string
}

const CarouselContext = createContext<CarouselContext | null>(null)

function useCarousel() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within the CarouselContext')
  }
  return context
}

function Carousel({
  children,
  duration = 4000,
  className,
}: {
  children: React.ReactNode
  duration?: number
  className?: string
}) {
  const carouselId = useId()
  const [totalSlides, setTotalSlides] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setPaused] = useState(false)
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('rtl')

  function setSlide(index: number) {
    setCurrentSlide(current => {
      let newIndex = index

      // Handle wraparound
      if (index > totalSlides - 1) {
        newIndex = 0
      } else if (index < 0) {
        newIndex = totalSlides - 1
      }

      // Handle wraparound direction
      if (current === totalSlides - 1 && newIndex === 0) {
        setDirection('rtl') // next wrapped
      } else if (current === 0 && newIndex === totalSlides - 1) {
        setDirection('ltr') // prev wrapped
      } else {
        setDirection(newIndex < current ? 'ltr' : 'rtl')
      }

      return newIndex
    })
  }

  function nextSlide() {
    setCurrentSlide(current => {
      setDirection('rtl')
      return current === totalSlides - 1 ? 0 : current + 1
    })
  }

  function prevSlide() {
    setCurrentSlide(current => {
      setDirection('ltr')
      return current === 0 ? totalSlides - 1 : current - 1
    })
  }

  const autoAdvance = duration > 0

  // Handle auto-advance with interval timer
  useEffect(() => {
    if (!autoAdvance || isPaused) {
      return
    }

    const interval = setInterval(() => {
      nextSlide()
    }, duration)

    return () => {
      clearInterval(interval)
    }
  }, [autoAdvance, isPaused, duration, currentSlide, nextSlide])

  return (
    <CarouselContext.Provider
      value={{
        nextSlide,
        prevSlide,
        setSlide,
        isPaused,
        setPaused,
        autoAdvance,
        duration,
        totalSlides,
        setTotalSlides,
        currentSlide,
        direction,
        carouselId,
      }}
    >
      <div
        data-slot="carousel"
        role="region"
        aria-roledescription="carousel"
        className={cn(className)}
        style={{ '--duration': `${duration}ms` } as React.CSSProperties}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselDeck({ children }: { children: React.ReactNode }) {
  const { setPaused, setTotalSlides } = useCarousel()

  // Automatically inject index into each CarouselSlide child and filter to only slides
  const childrenWithIndex = Children.toArray(children)
    .filter(child => isValidElement(child) && child.type === CarouselSlide)
    .map((child, index) => {
      if (isValidElement(child)) {
        return cloneElement(child, { index } as any)
      }
      return child
    })

  const slideCount = childrenWithIndex.length

  // Update total slides count based on number of children
  useEffect(() => {
    setTotalSlides(slideCount)
  }, [setTotalSlides, slideCount])

  return (
    <div
      data-slot="carousel-deck"
      className="relative z-2 grid-stack rounded-3xl focus-within:ring-2 ring-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {childrenWithIndex}
    </div>
  )
}

function CarouselSlide({
  children,
  className,
  index = 0,
}: {
  children: React.ReactNode
  className?: string
  index?: number
}) {
  const { direction, currentSlide } = useCarousel()

  const { ref, attributes } = useTransitionState(
    currentSlide === index,
    'opacity'
  )

  return (
    <div
      inert={currentSlide !== index || undefined}
      data-index={index}
      data-slot="carousel-slide"
      data-current={currentSlide === index || undefined}
      data-ltr={direction === 'ltr' || undefined}
      className={cn(
        `
        transition-[translate,opacity] duration-300 text-end
        data-entering:opacity-100 data-entering:translate-x-0
        data-entered:opacity-100 data-entered:translate-x-0
        data-exiting:opacity-0 data-exiting:-translate-x-16 data-ltr:data-exiting:translate-x-16
        data-exited:opacity-0 data-exited:translate-x-16 data-ltr:data-exited:-translate-x-16 data-exited:transition-none!
        opacity-0 translate-x-16 data-ltr:not-current:-translate-x-16
        z-1 inert:z-0
      `,
        className
      )}
      ref={ref as React.RefObject<HTMLDivElement>}
      {...attributes}
    >
      {children}
    </div>
  )
}

function CarouselPrevButton({
  children,
  variant = 'secondary',
  shape = 'circle',
  size = 'md',
  ...props
}: ComponentProps<typeof Button>) {
  const { prevSlide } = useCarousel()

  return (
    <Button
      data-slot="carousel-prev-button"
      variant={variant}
      shape={shape}
      size={size}
      onClick={prevSlide}
      iconOnly
      {...props}
    >
      {children ? children : <ArrowLeftIcon />}
    </Button>
  )
}

function CarouselNextButton({
  children,
  variant = 'secondary',
  shape = 'circle',
  size = 'md',
  ...props
}: ComponentProps<typeof Button>) {
  const { nextSlide } = useCarousel()

  return (
    <Button
      data-slot="carousel-next-button"
      variant={variant}
      shape={shape}
      size={size}
      onClick={nextSlide}
      iconOnly
      {...props}
    >
      {children ? children : <ArrowRightIcon />}
    </Button>
  )
}

function CarouselStatus({
  hidden,
  className,
}: {
  hidden?: boolean
  className?: string
}) {
  const {
    autoAdvance,
    setPaused,
    setSlide,
    isPaused,
    totalSlides,
    currentSlide,
    carouselId,
  } = useCarousel()

  return (
    <div
      className={cn(
        'flex gap-2 justify-center items-center mx-auto inert:overflow-clip inert:absolute inert:opacity-0',
        className
      )}
      inert={hidden || undefined}
      data-slot="carousel-status"
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {Array.from({ length: totalSlides }).map((_, i) => (
        <StatusDot
          key={i}
          index={i}
          isPaused={isPaused}
          current={currentSlide === i}
          autoAdvance={autoAdvance}
          onChangeSlide={setSlide}
          carouselId={carouselId}
        />
      ))}
    </div>
  )
}

function StatusDot({
  current,
  index,
  isPaused,
  autoAdvance,
  onChangeSlide,
  carouselId,
}: {
  current: boolean
  index: number
  isPaused: boolean
  autoAdvance?: boolean
  onChangeSlide: (index: number) => void
  carouselId: string
}) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => {
      setActive(current)
    })
  }, [current])

  return (
    <label
      data-slot="carousel-status-dot"
      data-index={index}
      className="grid-stack size-2.5 data-auto-advance:data-current:w-6 transition-all rounded-full bg-background-inverse/20 overflow-clip has-focus-visible:outline-2 outline-offset-1 has-focus-visible:outline-border-focus cursor-pointer"
      data-current={active || undefined}
      data-auto-advance={autoAdvance || undefined}
    >
      <div
        className="pointer-events-none in-data-current:opacity-100 opacity-0 transition-transform size-full ease-linear bg-background-inverse not-in-data-current:duration-1 data-pause:duration-300 rounded-full duration-(--duration) in-data-current:translate-x-6 data-pause:translate-x-0"
        data-slide-id={index}
        data-pause={!autoAdvance || isPaused || undefined}
      />
      <input
        type="radio"
        value={`Slide ${index + 1}`}
        name={`${carouselId}-current-slide`}
        onChange={() => onChangeSlide(index)}
        className="sr-only"
        tabIndex={active ? 0 : -1}
        checked={current}
      />
    </label>
  )
}

export {
  Carousel,
  CarouselDeck,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlide,
  CarouselStatus,
  useCarousel,
}
