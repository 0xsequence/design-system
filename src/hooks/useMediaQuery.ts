import { useEffect, useState } from 'react'

interface UseMediaQueryOptions {
  defaultValue?: boolean
}

/**
 * Hook that tracks whether a media query matches
 * @param query - Media query string (e.g., "(max-width: 768px)")
 * @param options - Optional configuration
 * @param options.defaultValue - Default value to use during SSR or before hydration (default: false)
 * @returns boolean indicating whether the media query matches
 */
export const useMediaQuery = (
  query: string,
  options: UseMediaQueryOptions = {}
): boolean => {
  const { defaultValue = false } = options

  const [matches, setMatches] = useState<boolean>(() => {
    // Server-side rendering or when window is not available
    if (typeof window === 'undefined') {
      return defaultValue
    }
    // Initial client-side value
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia(query)

    // Handler for media query changes
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setMatches(event.matches)
    }

    // Set initial value
    handleChange(mediaQuery)

    // Use modern addEventListener API
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}
