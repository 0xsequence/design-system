import { borderStyles, borderWidths, radii } from './border'
import { colors } from './color'
import { opacity } from './opacity'
import { space } from './space'
import { shadows } from './shadow'
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './typography'

export const tokens = {
  borderStyles,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radii,
  shadows,
  space
}

export type { Accent, ColorScheme } from './color'
export type Tokens = typeof tokens
