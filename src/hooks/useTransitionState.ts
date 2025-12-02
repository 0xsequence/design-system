import { useEffect, useRef, useState } from 'react'

export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited'

export function useTransitionState(active: boolean) {
  const [transition, setTransition] = useState<TransitionState>(
    active ? 'entered' : 'exited'
  )
  const prevActive = useRef(active)
  const ref = useRef<HTMLElement>(null)

  // Handle entering/exiting triggers
  useEffect(() => {
    if (prevActive.current !== active) {
      if (active) {
        setTransition('entering')
      } else if (prevActive.current) {
        setTransition('exiting')
      }
      prevActive.current = active
    }
  }, [active])

  // Listen for transition end
  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }

    const handleEnd = (event: TransitionEvent) => {
      if (event.target !== node) {
        return
      }
      if (transition === 'entering') {
        setTransition('entered')
      } else if (transition === 'exiting') {
        setTransition('exited')
      }
    }

    node.addEventListener('transitionend', handleEnd)
    return () => node.removeEventListener('transitionend', handleEnd)
  }, [transition])

  // Provide helper data attributes (undefined when inactive)
  const attributes = {
    'data-entering': transition === 'entering' ? '' : undefined,
    'data-entered': transition === 'entered' ? '' : undefined,
    'data-exiting': transition === 'exiting' ? '' : undefined,
    'data-exited': transition === 'exited' ? '' : undefined,
    'data-transition': transition,
  } as const

  return { state: transition, ref, attributes }
}
