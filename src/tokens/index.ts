import { borderWidths, radii } from './border'
import { colors } from './color'
import { blur } from './effect'
import { opacity } from './opacity'
import { space } from './space'
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './typography'
import { zIndex } from './z-index'

export const tokens = {
  blur,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  opacity,
  radii,
  space,
  zIndex,
}

export { breakpoints } from './breakpoints'
export { colors } from './color'

export type { ColorScheme } from './color'
export type Tokens = typeof tokens
