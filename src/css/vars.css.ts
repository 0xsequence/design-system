import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css'

import { ColorScheme, colorSchemes, tokens } from '../tokens'

import { getVarName } from './utils'

const { colors, ...baseTokens } = tokens

export const baseVars = createGlobalThemeContract(baseTokens, getVarName)

createGlobalTheme(':root', baseVars, baseTokens)

const makeColorScheme = (mode: ColorScheme = 'light') => {
  const schemeTokens = colors[mode]

  return {
    ...colors.base,
    ...colors.accents,
    gradientPrimary: colors.gradients.primary,
    gradientBackdrop: colors.gradients.backdrop,
    backgroundPrimary: schemeTokens.background.primary,
    backgroundSecondary: schemeTokens.background.secondary,
    backgroundComponent: schemeTokens.background.component,
    backgroundBackdrop: schemeTokens.background.backdrop,
    backgroundInverse: schemeTokens.background.inverse,
    borderSubtle: schemeTokens.border.subtle,
    border: schemeTokens.border.normal,
    borderFirm: schemeTokens.border.firm,
    borderInverse: schemeTokens.border.inverse,
    text: schemeTokens.text.body,
    textFaded: schemeTokens.text.faded,
    textTitle: schemeTokens.text.title,
    textInverse: schemeTokens.text.inverse,
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

export const vars = { ...baseVars, colors: colorSchemeVars }
export type ThemeVars = typeof vars
