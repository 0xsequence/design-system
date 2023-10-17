import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

import { Theme } from '~/components/ThemeProvider' 
import { capitalize } from '~/helpers'
import { getColors, getTokens, NetworkColors } from '~/tokens'

import { mapVarName } from './utils'
import { getColorSchemes } from '~/tokens/color'

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

const mapNetworkColors = <
  T extends NetworkColors,
  K extends keyof NetworkColors,
>(
  networkColors: T
) => {
  return Object.entries(networkColors).reduce(
    (acc, [key, value]) => {
      return { ...acc, ...mapTokens(key.toLowerCase(), value) }
    },
    {} as MapTokens<Lowercase<K>, T[K]>
  )
}

const { colors, ...baseTokens } = tokens

export const baseVars = createGlobalThemeContract(baseTokens, mapVarName)

createGlobalTheme(':root', baseVars, baseTokens)

const makeColorScheme = (theme: Theme) => {
  const colorSchemeTokens = getColorSchemes(theme)

  return {
    colors: {
      ...colors.base,
      ...colors.context,
      ...mapTokens('gradient', colors.gradient),
      ...mapTokens('background', colorSchemeTokens.background),
      ...mapTokens('border', colorSchemeTokens.border),
      ...mapTokens('button', colorSchemeTokens.button),
      ...mapTokens('text', colorSchemeTokens.text),
      ...mapNetworkColors(colors.network),
    },
  }
}

export const colorSchemeVars = createGlobalThemeContract(
  makeColorScheme(),
  mapVarName
)

for (const colorScheme of Object.keys(colors.colorSchemes) as ColorScheme[]) {
  createGlobalTheme(
    `[data-theme="${colorScheme}"]`,
    colorSchemeVars,
    makeColorScheme(colorScheme)
  )
}

export const vars = { ...baseVars, ...colorSchemeVars }
export type ThemeVars = typeof vars
