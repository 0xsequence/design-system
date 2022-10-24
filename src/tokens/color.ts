import { gray, grayDark } from '@radix-ui/colors'

type ScaleIndices = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type Scale = {
  [K in ScaleIndices as `scale${K}`]: string
}

const normalizeRadixColorScale = (scale: Record<string, string>): Scale => {
  return Object.values(scale).reduce((acc, x, idx) => {
    return { ...acc, [`scale${idx + 1}`]: x }
  }, {}) as Scale
}

export const colors = {
  light: normalizeRadixColorScale(gray),
  dark: normalizeRadixColorScale(grayDark)
} as const

export type ColorScheme = keyof typeof colors
