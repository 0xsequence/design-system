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

export const accents = {
  positive: 'hsl(155, 62%, 48%)',
  negative: 'hsl(0, 100%, 66%)',
  warning: 'hsl(38, 89%, 60%)',
  info: 'hsl(212, 63%, 53%)',
}

export const gradients = {
  primary:
    'linear-gradient(39.17deg, rgba(38, 34, 255, 0.7) -6.62%, rgba(82, 7, 240, 0.7) 40.22%, rgba(134, 77, 255, 0.7) 108.67%)',
}

export const colorSchemes = {
  light: { ...normalizeRadixColorScale(gray), accents, gradients },
  dark: { ...normalizeRadixColorScale(grayDark), accents, gradients },
} as const

export type ColorScheme = keyof typeof colorSchemes
