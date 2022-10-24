import { borderStyles, borderWidths, radii } from './border'
import { colors } from './color'
import { opacity } from './opacity'
import { shadows } from './shadow'
import { space } from './space'
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

export type { ColorScheme } from './color'
export type Tokens = typeof tokens
