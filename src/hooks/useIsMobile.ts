import { useMediaQuery } from './useMediaQuery.js'

const MOBILE_BREAKPOINT = 768

/**
 * Hook that returns true if the viewport width is below the mobile breakpoint (768px)
 * @param defaultValue - Default value to use during SSR or before hydration (default: false)
 * @returns boolean indicating whether the viewport is mobile-sized
 */
export const useIsMobile = (defaultValue = false): boolean => {
  return useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`, {
    defaultValue,
  })
}
