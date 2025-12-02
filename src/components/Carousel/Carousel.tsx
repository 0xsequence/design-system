import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ComponentProps,
} from 'react'

import { useTransitionState } from '../../hooks/useTransitionState.js'
import ArrowLeftIcon from '../../icons/ArrowLeftIcon.js'
import ArrowRightIcon from '../../icons/ArrowRightIcon.js'
import ChevronLeftIcon from '../../icons/ChevronLeftIcon.js'
import ChevronRightIcon from '../../icons/ChevronRightIcon.js'
import { cn } from '../../utils/classnames.js'

interface CarouselContext {
  prevSlide: () => void
  nextSlide: () => void
  setSlide: (value: number) => void
  totalSlides: number
  currentSlide: number
  autoAdvance: boolean
  isPaused: boolean
  setPaused: (value: boolean) => void
}

const CarouselContext = createContext<CarouselContext | null>(null)

function useCarouselState() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarouselState must be used within the CarouselContext')
  }
  return context
}

function CarouselParent({
  children,
  count,
  autoAdvance = false,
  duration = 4000,
}: {
  children: React.ReactNode
  count: number
  autoAdvance?: boolean
  duration?: number
}) {
  const [slide, setSlide] = useState(0)
  const [isPaused, setPaused] = useState(false)

  function nextSlide() {
    setSlide(current => {
      let next = current

      if (current === count - 1) {
        next = 0
      } else {
        next = current + 1
      }

      return next
    })
  }

  function prevSlide() {
    setSlide(current => {
      let prev = current
      if (current === 0) {
        prev = count - 1
      } else {
        prev = current - 1
      }
      return prev
    })
  }

  const shouldAutoAdvance = duration > 0 || autoAdvance

  return (
    <CarouselContext.Provider
      value={{
        nextSlide,
        prevSlide,
        setSlide,
        isPaused,
        setPaused,
        autoAdvance: shouldAutoAdvance,
        totalSlides: count,
        currentSlide: slide,
      }}
    >
      <div
        data-slot="carousel"
        style={{ '--duration': `${duration}ms` } as React.CSSProperties}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function Deck({
  children,
}: {
  children: (current: number) => React.ReactNode
}) {
  const { currentSlide, setPaused } = useCarouselState()

  return (
    <div
      data-slot="deck"
      className="overflow-clip relative z-2 grid-stack rounded-3xl focus-within:ring-2 ring-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {children(currentSlide)}
    </div>
  )
}

function PrevButton({
  children,
  variant = 'default',
  className = '',
  ...rest
}: {
  children?: React.ReactNode
  variant?: 'default' | 'small' | 'none'
  className?: string
} & ComponentProps<'button'>) {
  const { prevSlide } = useCarouselState()

  const variants = {
    default:
      'rounded-full border border-border-card text-primary flex items-center justify-center size-9 bg-background-secondary focus-visible:opacity-80 hover:opacity-80 transition-all active:scale-95 origin-bottom',
    small: 'text-primary',

    none: '',
  }
  const content = children ? (
    children
  ) : variant == 'default' ? (
    <ArrowLeftIcon />
  ) : variant == 'small' ? (
    <ChevronLeftIcon className="size-4" />
  ) : null
  return (
    <button
      type="button"
      className={cn('cursor-pointer', variants[variant], className)}
      onClick={prevSlide}
      {...rest}
    >
      {content}
    </button>
  )
}

function NextButton({
  children,
  variant = 'default',
  className = '',
  ...rest
}: {
  children?: React.ReactNode
  variant?: 'default' | 'small' | 'none'
  className?: string
} & ComponentProps<'button'>) {
  const { nextSlide } = useCarouselState()

  const variants = {
    default:
      'rounded-full border border-border-card text-primary flex items-center justify-center size-9 bg-background-secondary focus-visible:opacity-80 hover:opacity-80 transition-all active:scale-95 origin-bottom',
    small: 'text-primary',
    none: '',
  }

  const content = children ? (
    children
  ) : variant == 'default' ? (
    <ArrowRightIcon />
  ) : variant == 'small' ? (
    <ChevronRightIcon className="size-4" />
  ) : null

  return (
    <button
      data-slot="next-button"
      type="button"
      className={cn('cursor-pointer', variants[variant], className)}
      onClick={nextSlide}
      {...rest}
    >
      {content}
    </button>
  )
}

function Status({ hidden }: { hidden?: boolean }) {
  const {
    autoAdvance,
    setSlide,
    nextSlide,
    isPaused,
    totalSlides,
    currentSlide,
  } = useCarouselState()

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
      className="flex gap-2 justify-center items-center mx-auto inert:overflow-clip inert:absolute inert:opacity-0"
      inert={hidden || undefined}
      data-slot="status"
    >
      {Array.from({ length: totalSlides }).map((_, i) => (
        <StatusDot
          key={i}
          index={i}
          isPaused={isPaused}
          current={currentSlide === i}
          autoAdvance={autoAdvance}
          onTransitionEnd={handleSlideTransitionEnd}
          handleSetSlide={() => {
            setSlide(i)
          }}
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
  handleSetSlide,
  ...props
}: {
  current: boolean
  index: number
  isPaused: boolean
  autoAdvance?: boolean
  handleSetSlide: () => void
} & ComponentProps<'div'>) {
  const [active, setActive] = useState(false)

  const { onTransitionEnd } = props

  useEffect(() => {
    requestAnimationFrame(() => {
      setActive(current)
    })
  }, [current])

  return (
    <div
      data-slot="status-dot"
      data-index={index}
      className="grid-stack size-2.5 data-auto-advance:data-current:w-6 transition-all rounded-full bg-primary/20 overflow-clip focus-within:ring-2 ring-primary"
      data-current={active || undefined}
      data-auto-advance={autoAdvance || undefined}
    >
      {' '}
      <div
        className="in-data-current:opacity-100 opacity-0 transition-transform size-full ease-linear bg-background-inverse data-pause:duration-300 rounded-sm duration-(--duration) in-data-current:translate-x-6 data-pause:translate-x-0"
        data-slide-id={index}
        onTransitionEnd={onTransitionEnd}
        data-pause={!autoAdvance || isPaused || undefined}
      ></div>
      <input
        type="radio"
        value={`Slide ${index + 1}`}
        name="current-slide"
        onChange={handleSetSlide}
        className="appearance-none opacity-0"
        tabIndex={active ? 0 : -1}
      />
    </div>
  )
}

export function Slide({
  children,
  current,
  index,
}: {
  children: React.ReactNode
  current: number
  index: number
}) {
  const { ref, attributes } = useTransitionState(current === index)

  return (
    <div
      inert={!current || undefined}
      data-index={index}
      data-slot="slide"
      data-current={current === index || undefined}
      className={`
        transition-[translate,opacity] duration-300 text-end
        data-entering:opacity-100 data-entering:translate-x-0
        data-entered:opacity-100 data-entered:translate-x-0
        data-exiting:opacity-0 data-exiting:-translate-x-16
        data-exited:opacity-0 data-exited:translate-x-16 data-exited:transition-none!
        opacity-0 translate-x-16
      `}
      ref={ref as React.RefObject<HTMLDivElement>}
      {...attributes}
    >
      {children}
    </div>
  )
}

export const Carousel = Object.assign(CarouselParent, {
  Deck,
  Slide,
  Status,
  PrevButton,
  NextButton,
  useCarouselState,
})
