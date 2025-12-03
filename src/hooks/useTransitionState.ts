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
        // Valid transitions to 'entering': from 'exited'
        setTransition(current => {
          // If already entering or entered, don't restart
          if (current === 'entering' || current === 'entered') {
            return current
          }
          return 'entering'
        })
      } else {
        // Valid transitions to 'exiting': from 'entered' or 'entering'
        setTransition(current => {
          // If already exiting or exited, don't restart
          if (current === 'exiting' || current === 'exited') {
            return current
          }
          return 'exiting'
        })
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

      // Only transition to final state if we're in the corresponding transient state
      setTransition(current => {
        if (current === 'entering') {
          return 'entered'
        } else if (current === 'exiting') {
          return 'exited'
        }
        // If we're already in a final state, don't change
        return current
      })
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
