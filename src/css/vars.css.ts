import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'

import { ColorScheme, tokens } from '../tokens'

import { getVarName } from './utils'

const { colors: _, ...baseTokens } = tokens

export const baseVars = createGlobalThemeContract(baseTokens, getVarName)

createGlobalTheme(':root', baseVars, baseTokens)

const makeColorScheme = (mode: ColorScheme = 'light') => {
  const colors = tokens.colors[mode]

  return {
    colors
  }
}

export const colorSchemeVars = createGlobalThemeContract(makeColorScheme(), getVarName)

for (const colorScheme of Object.keys(tokens.colors) as ColorScheme[]) {
  createGlobalTheme(`[data-theme="${colorScheme}"]`, colorSchemeVars, makeColorScheme(colorScheme))
}

export const vars = { ...baseVars, ...colorSchemeVars }
export type ThemeVars = typeof vars
