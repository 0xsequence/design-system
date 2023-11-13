export interface ColorTokens {
  base: BaseColors
  context: ContextColors
  network: typeof networkColors
  gradient: Gradients
  colorSchemes: ColorSchemes
}

export type ColorScheme = 'dark' | 'light'

export interface ColorBase {
  r: number
  g: number
  b: number
}

export interface ThemePalette {
  foreground: String
  background: String
  backgroundBackdrop: String
  backgroundRaised: String
  statusPositive: String
  statusNegative: String
  statusWarning: String
  statusInfo: String
  primaryButton: string
}

const convertToRgb = (hex: String): ColorBase => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  return { r, g, b };
}

export const makeRGBA = (color: String, alpha: number) => {
  const colorRgb = convertToRgb(color)

  return `rgba(${colorRgb.r},${colorRgb.g},${colorRgb.b},${alpha})`
}

export const darkPalette: ThemePalette = {
  foreground: '#FFFFFF',
  background: '#000000',
  backgroundBackdrop: '#222222',
  backgroundRaised: '#363636',
  statusPositive: '#1FC266',
  statusNegative: '#C2501F',
  statusWarning: '#F4B03E',
  statusInfo: '#0076CC',
  primaryButton: 'linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)'
}

export const lightPalette: ThemePalette = {
  foreground: '#000000',
  background: '#FFFFFF',
  backgroundBackdrop: '#DDDDDD',
  backgroundRaised: '#C0C0C0',
  statusPositive: '#1FC266',
  statusNegative: '#C2501F',
  statusWarning: '#F4B03E',
  statusInfo: '#0076CC',
  primaryButton: 'linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)'
}

// theme colors that can be overriden via the theme palette
export const generateThemeColors = (palette: ThemePalette) => {
  return ({
    backgroundPrimary: makeRGBA(palette.background, 1),
    backgroundSecondary: makeRGBA(palette.foreground, 0.1),
    backgroundContrast: makeRGBA(palette.background, 0.5),
    backgroundMuted: makeRGBA(palette.foreground, 0.05),
    backgroundControl: makeRGBA(palette.foreground, 0.25),
    backgroundInverse: makeRGBA(palette.foreground, 1),
    backgroundBackdrop: makeRGBA(palette.backgroundBackdrop, 0.9),
    backgroundOverlay:  makeRGBA(palette.background, 0.7),
    backgroundRaised: makeRGBA(palette.backgroundRaised, 0.7),
    gradientPrimary: palette.primaryButton,
    positive: makeRGBA(palette.statusPositive, 1),
    negative: makeRGBA(palette.statusNegative, 1),
    info: makeRGBA(palette.statusInfo, 1),
    warning: makeRGBA(palette.statusWarning, 1),
    borderNormal: makeRGBA(palette.foreground, 0.25),
    borderFocus: makeRGBA(palette.foreground, 0.5),
    text100: makeRGBA(palette.foreground, 1),
    text80: makeRGBA(palette.foreground, 0.8),
    text50: makeRGBA(palette.foreground, 0.5),
    textInverse100: makeRGBA(palette.background, 1),
    buttonGlass: makeRGBA(palette.foreground, 0.15),
    buttonEmphasis: makeRGBA(palette.background, 0.5),
    buttonInverse: makeRGBA(palette.foreground, 0.8),
  })
}

export const darkThemeColors = generateThemeColors(darkPalette)
export const lightThemeColors = generateThemeColors(lightPalette)

interface ColorSchemeTokens {
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
  text: TextColors
  // gradients: Gradients // Gradients are global and not color scheme specific
  // context: ContextColors // ContextColors are global and not color scheme specific
}

type ColorSchemes<T = ColorSchemeTokens> = { [key in ColorScheme]: T }

interface BaseColors {
  black: string
  white: string
  inherit: 'inherit'
  transparent: 'transparent'
}

interface BackgroundColors {
  primary: string
  secondary: string
  contrast: string
  muted: string
  control: string
  inverse: string
  backdrop: string
  overlay: string
  raised: string
}

interface BorderColors {
  normal: string
  focus: string
}

interface ButtonColors {
  glass: string
  emphasis: string
  inverse: string
}

interface TextColors {
  '100': string
  '80': string
  '50': string
  inverse100: string
}

export interface ContextColors {
  positive: string
  negative: string
  info: string
  warning: string
}

interface Gradients {
  backdrop: string
  primary: string
  secondary: string
}

const backgroundColors: ColorSchemes<BackgroundColors> = {
  dark: {
    primary: darkThemeColors.backgroundPrimary,
    secondary: darkThemeColors.backgroundSecondary,
    contrast: darkThemeColors.backgroundContrast,
    muted: darkThemeColors.backgroundMuted,
    control: darkThemeColors.backgroundControl,
    inverse: darkThemeColors.backgroundInverse,
    backdrop: darkThemeColors.backgroundBackdrop,
    overlay: darkThemeColors.backgroundOverlay,
    raised: darkThemeColors.backgroundRaised,
  },
  light: {
    primary: lightThemeColors.backgroundPrimary,
    secondary: lightThemeColors.backgroundSecondary,
    contrast: lightThemeColors.backgroundContrast,
    muted: lightThemeColors.backgroundMuted,
    control: lightThemeColors.backgroundControl,
    inverse: lightThemeColors.backgroundInverse,
    backdrop: lightThemeColors.backgroundBackdrop,
    overlay: lightThemeColors.backgroundOverlay,
    raised: lightThemeColors.backgroundRaised,
  },
}

const borderColors: ColorSchemes<BorderColors> = {
  dark: {
    normal: darkThemeColors.borderNormal,
    focus: darkThemeColors.borderFocus,
  },
  light: {
    normal: lightThemeColors.borderNormal,
    focus: lightThemeColors.borderFocus,
  },
}

const buttonColors: ColorSchemes<ButtonColors> = {
  dark: {
    glass: darkThemeColors.buttonGlass,
    emphasis: darkThemeColors.buttonEmphasis,
    inverse: darkThemeColors.buttonInverse,
  },
  light: {
    glass: lightThemeColors.buttonGlass,
    emphasis: lightThemeColors.buttonEmphasis,
    inverse: lightThemeColors.buttonInverse,
  },
}

const textColors: ColorSchemes<TextColors> = {
  dark: {
    '100': darkThemeColors.text100,
    '80': darkThemeColors.text80,
    '50': darkThemeColors.text50,
    inverse100: darkThemeColors.textInverse100,
  },
  light: {
    '100': lightThemeColors.text100,
    '80': lightThemeColors.text80,
    '50': lightThemeColors.text50,
    inverse100: lightThemeColors.textInverse100,
  },
}

// ContextColors are global and not color scheme specific
const contextColors: ContextColors = {
  positive: darkThemeColors.positive,
  negative: darkThemeColors.negative,
  info: darkThemeColors.info,
  warning: darkThemeColors.warning,
}

// Gradients are global and not color scheme specific
const gradients: Gradients = {
  backdrop: `linear-gradient(
    243.18deg, 
    rgba(86, 52, 189, 0.85) 0%, 
    rgba(49, 41, 223, 0.85) 63.54%, 
    rgba(7, 98, 149, 0.85) 100%
  )`,
  primary: darkThemeColors.gradientPrimary,
  secondary: `linear-gradient(32.51deg, #951990 -15.23%, #3A35B1 48.55%, #20A8B0 100%)`,
}

const networkColors = {
  Arbitrum: {
    dark: '#212D44',
    light: '#93D4FF',
  },
  Avalance: {
    dark: '#810C0C',
    light: '#FF8080',
  },
  BSC: {
    dark: '#584508',
    light: '#FCCF43',
  },
  Ethereum: {
    dark: '#132362',
    light: '#AABBFF',
  },
  Gnosis: {
    dark: '#084246',
    light: '#8CF6FD',
  },
  Polygon: {
    dark: '#350881',
    light: '#C7A6FF',
  },
}

const colorSchemes: ColorSchemes = {
  dark: {
    background: backgroundColors.dark,
    border: borderColors.dark,
    button: buttonColors.dark,
    text: textColors.dark,
  },
  light: {
    background: backgroundColors.light,
    border: borderColors.light,
    button: buttonColors.light,
    text: textColors.light,
  },
}

export const colors: ColorTokens = {
  base: {
    black: '#000000',
    white: '#ffffff',
    inherit: 'inherit',
    transparent: 'transparent',
  },
  context: contextColors,
  gradient: gradients,
  network: networkColors,
  colorSchemes,
}
