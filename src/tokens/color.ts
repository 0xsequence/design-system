import { Theme, Color } from '~/components/ThemeProvider'

export type NetworkColors = typeof networkColors

export interface ColorTokens {
  base: BaseColors
  context: ContextColors
  network: NetworkColors
  gradient: Gradients
  colorSchemes: ColorSchemeTokens
}

interface ColorSchemeTokens {
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
  text: TextColors
  // gradients: Gradients // Gradients are global and not color scheme specific
  // context: ContextColors // ContextColors are global and not color scheme specific
}

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

const makeRGBA = (color: Color, alpha: number) => {
  return `rgba(${color.r},${color.g},${color.b},${alpha})`
}

const getBackgroundColors = (theme: Theme): BackgroundColors => {
  return ({
    primary: makeRGBA(theme.background, 1),
    secondary: makeRGBA(theme.foreground, 1),
    contrast: makeRGBA(theme.background, 0.5),
    muted: makeRGBA(theme.foreground, 0.05),
    control: makeRGBA(theme.foreground, 0.25),
    inverse: makeRGBA(theme.foreground, 1),
    backdrop: makeRGBA(theme.backgroundBackdrop, 0.9),
    overlay:  makeRGBA(theme.background, 0.7),
    raised: makeRGBA(theme.backgroundRaised, 0.7),
  })
}

const getBorderColors = (theme: Theme): BorderColors => {
  return ({
    normal: makeRGBA(theme.foreground, 0.25),
    focus: makeRGBA(theme.foreground, 0.5),
  })
}

const getButtonColors = (theme: Theme): ButtonColors => {
  return ({
    glass: makeRGBA(theme.foreground, 0.15),
    emphasis: makeRGBA(theme.background, 0.5),
    inverse: makeRGBA(theme.foreground, 0.8),
  })
}

const getTextColors = (theme: Theme): TextColors => {
  return ({
    '100': makeRGBA(theme.foreground, 1),
    '80': makeRGBA(theme.foreground, 0.8),
    '50': makeRGBA(theme.foreground, 0.5),
    inverse100: makeRGBA(theme.background, 1),
  })
}

// ContextColors are global and not color scheme specific
const contextColors: ContextColors = {
  positive: '#1FC266',
  negative: '#C2501F',
  info: '#0076CC',
  warning: '#F4B03E',
}

const getGradients = (theme: Theme): Gradients => {
  return ({
    backdrop: `linear-gradient(
      243.18deg, 
      rgba(86, 52, 189, 0.85) 0%, 
      rgba(49, 41, 223, 0.85) 63.54%, 
      rgba(7, 98, 149, 0.85) 100%
    )`,
    primary: theme.primaryButton,
    secondary: `linear-gradient(32.51deg, #951990 -15.23%, #3A35B1 48.55%, #20A8B0 100%)`,
  })
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

export const getColorSchemes = (theme: Theme): ColorSchemeTokens => {
  return ({
    background: getBackgroundColors(theme),
    border: getBorderColors(theme),
    button: getButtonColors(theme),
    text: getTextColors(theme),
  })
}

export const getColors = (theme: Theme): ColorTokens => {
  return ({
    base: {
      black: '#000000',
      white: '#ffffff',
      inherit: 'inherit',
      transparent: 'transparent',
    },
    context: contextColors,
    gradient: getGradients(theme),
    network: networkColors,
    colorSchemes: getColorSchemes(theme),
  })
}
