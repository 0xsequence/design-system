import {
  createContext,
  useContext,
  useEffect,
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
  isPaused: boolean
  setPaused: Dispatch<SetStateAction<boolean>>
  direction: 'ltr' | 'rtl'
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
  count,
  duration = 4000,
  className,
}: {
  children: React.ReactNode
  count: number
  duration?: number
  className?: string
}) {
  const [currentSlide, setSlide] = useState(0)
  const [isPaused, setPaused] = useState(false)
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('rtl')

  function handleSlideChange(index: number) {
    setSlide(current => {
      setDirection(index < current ? 'ltr' : 'rtl')

      if (index > count - 1) {
        return 0
      } else if (index < 0) {
        return count - 1
      }

      return index
    })
  }

  function nextSlide() {
    handleSlideChange(currentSlide + 1)
  }

  function prevSlide() {
    handleSlideChange(currentSlide - 1)
  }

  const autoAdvance = duration > 0 ? true : false

  return (
    <CarouselContext.Provider
      value={{
        nextSlide,
        prevSlide,
        setSlide: handleSlideChange,
        isPaused,
        setPaused,
        autoAdvance,
        totalSlides: count,
        currentSlide,
        direction,
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

function CarouselDeck({
  children,
}: {
  children: (current: number) => React.ReactNode
}) {
  const { currentSlide, setPaused } = useCarousel()

  return (
    <div
      data-slot="carousel-deck"
      className="relative z-2 grid-stack rounded-3xl focus-within:ring-2 ring-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {children(currentSlide)}
    </div>
  )
}

function CarouselSlide({
  children,
  className,
  current,
  index,
}: {
  children: React.ReactNode
  className?: string
  current: number
  index: number
}) {
  const { ref, attributes } = useTransitionState(current === index)

  const { direction } = useCarousel()

  return (
    <div
      inert={current !== index || undefined}
      data-index={index}
      data-slot="carousel-slide"
      data-current={current === index || undefined}
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
    setSlide,
    nextSlide,
    isPaused,
    totalSlides,
    currentSlide,
  } = useCarousel()

  function handleSlideTransitionEnd(
    evt: React.TransitionEvent<HTMLDivElement>
  ) {
    if (
      evt.propertyName === 'translate' &&
      !isPaused &&
      autoAdvance &&
      Number(evt.currentTarget.dataset.slideId) === currentSlide
    ) {
      nextSlide()
    }
  }

  return (
    <div
      className={cn(
        'flex gap-2 justify-center items-center mx-auto inert:overflow-clip inert:absolute inert:opacity-0',
        className
      )}
      inert={hidden || undefined}
      data-slot="carousel-status"
    >
      {Array.from({ length: totalSlides }).map((_, i) => (
        <StatusDot
          key={i}
          index={i}
          isPaused={isPaused}
          current={currentSlide === i}
          autoAdvance={autoAdvance}
          onTransitionEnd={handleSlideTransitionEnd}
          onChangeSlide={setSlide}
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
  onTransitionEnd,
}: {
  current: boolean
  index: number
  isPaused: boolean
  autoAdvance?: boolean
  onChangeSlide: (index: number) => void
} & ComponentProps<'div'>) {
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
      className="grid-stack size-2.5 data-auto-advance:data-current:w-6 transition-all rounded-full bg-background-inverse/20 overflow-clip focus-within:ring-2 ring-background-inverse cursor-pointer"
      data-current={active || undefined}
      data-auto-advance={autoAdvance || undefined}
    >
      <div
        className="in-data-current:opacity-100 opacity-0 transition-transform size-full ease-linear bg-background-inverse not-in-data-current:duration-1 data-pause:duration-300 rounded-full duration-(--duration) in-data-current:translate-x-6 data-pause:translate-x-0"
        data-slide-id={index}
        onTransitionEnd={onTransitionEnd}
        data-pause={!autoAdvance || isPaused || undefined}
      ></div>
      <input
        type="radio"
        value={`Slide ${index + 1}`}
        name="current-slide"
        onChange={() => onChangeSlide(index)}
        className="sr-only"
        tabIndex={active ? 0 : -1}
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
}
