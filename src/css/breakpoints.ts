export const breakpoints = {
  sm: 0,
  md: 480,
  lg: 769,
  xl: 1281
}

export type Breakpoint = keyof typeof breakpoints

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[]
