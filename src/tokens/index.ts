import { borderWidths, radii } from './border'
import { colorSchemes } from './color'
import { opacity } from './opacity'
import { shadows } from './shadow'
import { space } from './space'
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './typography'

export const tokens = {
  borderWidths,
  colorSchemes,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radii,
  shadows,
  space,
}

export type { ColorScheme } from './color'
export type Tokens = typeof tokens
