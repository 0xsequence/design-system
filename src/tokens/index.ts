import { Theme } from '~/components/ThemeProvider'
import { borderWidths, radii } from './border'
import { getColors } from './color'
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

export const getTokens = (theme: Theme) => {
  return ({
    blur,
    borderWidths,
    colors: getColors(theme),
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    opacity,
    radii,
    space,
  })
}

export { getColors } from './color'

export type { NetworkColors } from './color' 
export type Tokens = ReturnType<typeof getTokens>
