import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'

import { ColorScheme, tokens } from '../tokens'
import { getVarName } from './utils'

const { colors, ...baseTokens } = tokens

export const baseVars = createGlobalThemeContract(baseTokens, getVarName)

createGlobalTheme(':root', baseVars, baseTokens)

const makeColorScheme = (mode: ColorScheme = 'light') => {
  const colors = tokens.colors[mode]

  return {
    colors: {
      ...tokens.colors.base,
      ...colors
    },
    mode: {
      colors
    }
  }
}

export const colorSchemeVars = createGlobalThemeContract(makeColorScheme(), getVarName)

createGlobalTheme('[data-theme="light"]', colorSchemeVars, makeColorScheme('light'))
createGlobalTheme('[data-theme="dark"]', colorSchemeVars, makeColorScheme('dark'))

export const vars = { ...baseVars, ...colorSchemeVars }
export type ThemeVars = typeof vars
