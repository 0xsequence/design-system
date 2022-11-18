import { borderWidths, radii } from './border'
import { colors } from './color'
import { blur } from './effect'
import { networkColors } from './network'
import { opacity } from './opacity'
import { space } from './space'
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './typography'

export const tokens = {
  blur,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  networkColors,
  opacity,
  radii,
  space,
}

export { colorSchemes } from './color'

export type { ColorScheme } from './color'
export type Tokens = typeof tokens
