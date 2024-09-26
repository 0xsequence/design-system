import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

import { ColorScheme, tokens } from '~/tokens'

import { mapVarName } from './utils'

const { colors, ...baseTokens } = tokens

export const baseVars = createGlobalThemeContract(baseTokens, mapVarName)

createGlobalTheme(':root', baseVars, baseTokens)

// Color Palettes
export const colorPaletteVars = createGlobalThemeContract(
  colors.palettes,
  mapVarName
)

createGlobalTheme(':root', colorPaletteVars, colors.palettes)

// Color Schemes (light | dark)
const makeColorScheme = (mode: ColorScheme = 'dark') => {
  return {
    colors: { ...colors[mode] },
  }
}

export const colorSchemeVars = createGlobalThemeContract(
  makeColorScheme(),
  mapVarName
)

createGlobalTheme(':root', colorSchemeVars, makeColorScheme())

// for (const colorScheme of Object.keys(colors) as ColorScheme[]) {
//   createGlobalTheme(
//     `[data-theme="${colorScheme}"]`,
//     colorSchemeVars,
//     makeColorScheme(colorScheme)
//   )
// }

export const vars = { ...baseVars, ...colorSchemeVars }
export type ThemeVars = typeof vars
