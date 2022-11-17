import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

import { ColorScheme, colorSchemes, tokens } from '~/tokens'

import { capitalize, getVarName } from './utils'

type MapTokens<P extends string, T> = {
  [K in keyof T & string as `${P}${Capitalize<K>}`]: string
}

const mapTokens = <P extends string, T extends {}>(
  prefix: P,
  tokens: T
): MapTokens<P, T> => {
  return Object.entries(tokens).reduce((acc, [key, value]) => {
    return { ...acc, [`${prefix}${capitalize(key)}`]: value }
  }, {}) as MapTokens<P, T>
}

const { colors, ...baseTokens } = tokens

export const baseVars = createGlobalThemeContract(baseTokens, getVarName)

createGlobalTheme(':root', baseVars, baseTokens)

const makeColorScheme = (mode: ColorScheme = 'light') => {
  const schemeTokens = colors[mode]

  return {
    colors: {
      ...colors.base,
      ...colors.context,
      ...mapTokens('gradient', colors.gradients),
      ...mapTokens('background', schemeTokens.background),
      ...mapTokens('border', schemeTokens.border),
      ...mapTokens('button', schemeTokens.button),
      ...mapTokens('text', schemeTokens.text),
    },
  }
}

export const colorSchemeVars = createGlobalThemeContract(
  makeColorScheme(),
  getVarName
)

for (const colorScheme of Object.keys(colorSchemes) as ColorScheme[]) {
  createGlobalTheme(
    `[data-theme="${colorScheme}"]`,
    colorSchemeVars,
    makeColorScheme(colorScheme)
  )
}

export const vars = { ...baseVars, ...colorSchemeVars }
export type ThemeVars = typeof vars
