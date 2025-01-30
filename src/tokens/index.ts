import { colors } from './color'
import { blur } from './effect'
import { fonts } from './typography'

export const tokens = {
  blur,
  colors,
  fonts,
}

export { breakpoints } from './breakpoints'
export { colors } from './color'

export type { ColorScheme } from './color'
export type Tokens = typeof tokens
