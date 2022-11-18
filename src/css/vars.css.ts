import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

import { ColorScheme, colorSchemes, tokens } from '~/tokens'

import { capitalize, mapVarName } from './utils'

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

type NetworkColors = typeof tokens.networkColors

const mapNetworkColors = <
  T extends NetworkColors,
  K extends keyof NetworkColors
>(
  networkColors: T
) => {
  return Object.entries(networkColors).reduce((acc, [key, value]) => {
    return { ...acc, ...mapTokens(key.toLowerCase(), value) }
  }, {} as MapTokens<Lowercase<K>, T[K]>)
}

const { colors, ...baseTokens } = tokens

export const baseVars = createGlobalThemeContract(baseTokens, mapVarName)

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
      ...mapNetworkColors(baseTokens.networkColors),
    },
  }
}

export const colorSchemeVars = createGlobalThemeContract(
  makeColorScheme(),
  mapVarName
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
