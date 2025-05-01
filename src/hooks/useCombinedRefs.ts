import type { Ref } from 'react'

/**
 * Combines multiple refs into one
 * @param refs
 * @returns
 */
export const useCombinedRefs =
  (...refs: Array<Ref<any>>): Ref<any> =>
  (element: any) =>
    refs.forEach(ref => {
      if (!ref) {
        return
      }

      if (typeof ref === 'function') {
        ref(element)
      } else {
        ;(ref as any).current = element
      }
    })
