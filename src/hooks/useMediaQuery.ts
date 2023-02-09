import { useEffect, useState } from 'react'

import { breakpoints } from '~/css/breakpoints'

// Inspired by Material-UIs useMediaQuery hook:
// https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/useMediaQuery/useMediaQuery.js

// TODO move this to design-system

export type BreakpointType = 'isMobile' | 'isDesktop'

interface Options {
  defaultMatches?: boolean
}

// useMediaQuery will re-render state whenever the media query matches.
export const useMediaQuery = (
  queryInput: BreakpointType | string,
  options: Options = {}
) => {
  const bp = new Map<BreakpointType, string>()
    .set('isMobile', `@media screen and (max-width: ${breakpoints.lg - 1}px)`)
    .set('isDesktop', `@media screen and (min-width: ${breakpoints.lg}px)`)

  if (!queryInput.startsWith('@media')) {
    const bpQuery = bp.get(queryInput as any)
    if (!bpQuery || bpQuery === '') {
      throw new Error(
        `useMediaQuery failed to get breakpoint from theme for: ${queryInput}`
      )
    }
    queryInput = bpQuery
  }

  const query = queryInput.replace(/^@media( ?)/m, '')
  const supportMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined'
  const { defaultMatches = false } = options

  const [match, setMatch] = useState(() => {
    if (supportMatchMedia) {
      return window.matchMedia(query).matches
    }
    // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.
    return defaultMatches
  })

  useEffect(() => {
    let active = true

    if (!supportMatchMedia) {
      return undefined
    }

    const queryList = window.matchMedia(query)
    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches)
      }
    }
    updateMatch()
    queryList.addListener(updateMatch)
    return () => {
      active = false
      queryList.removeListener(updateMatch)
    }
  }, [query, supportMatchMedia])

  return match
}
