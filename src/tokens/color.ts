export interface ColorTokens {
  base: BaseColors
  context: ContextColors
  network: typeof networkColors
  gradient: Gradients
  colorSchemes: ColorSchemes
}

export type ColorScheme = 'dark' | 'light'

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
    primary: 'rgba(0, 0, 0, 1)',
    secondary: 'rgba(255, 255, 255, 0.1)',
    contrast: 'rgba(0, 0, 0, 0.5)',
    muted: 'rgba(255, 255, 255, 0.05)',
    control: 'rgba(255, 255, 255, 0.25)',
    inverse: 'rgba(255, 255, 255, 1)',
    backdrop: 'rgba(34, 34, 34, 0.9)',
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
  light: {
    primary: 'rgba(244, 244, 244, 1)',
    secondary: 'rgba(0, 0, 0, 0.1)',
    contrast: 'rgba(244, 244, 244, 0.5)',
    muted: 'rgba(0, 0, 0, 0.05)',
    control: 'rgba(0, 0, 0, 0.25)',
    inverse: 'rgba(0, 0, 0, 1)',
    backdrop: 'rgba(221, 221, 221, 0.9)',
    overlay: 'rgba(244, 244, 244, 0.7)',
  },
}

const borderColors: ColorSchemes<BorderColors> = {
  dark: {
    normal: 'rgba(255, 255, 255, 0.25)',
    focus: 'rgba(255, 255, 255, 0.5)',
  },
  light: {
    normal: 'rgba(0, 0, 0, 0.25)',
    focus: 'rgba(0, 0, 0, 0.5)',
  },
}

const buttonColors: ColorSchemes<ButtonColors> = {
  dark: {
    glass: 'rgba(255, 255, 255, 0.15)',
    emphasis: 'rgba(0, 0, 0, 0.5)',
    inverse: 'rgba(255, 255, 255, 0.8)',
  },
  light: {
    glass: 'rgba(0, 0, 0, 0.15)',
    emphasis: 'rgba(255, 255, 255, 0.5)',
    inverse: 'rgba(0, 0, 0, 0.8)',
  },
}

const textColors: ColorSchemes<TextColors> = {
  dark: {
    '100': 'rgba(255, 255, 255, 1)',
    '80': 'rgba(255, 255, 255, 0.8)',
    '50': 'rgba(255, 255, 255, 0.5)',
    inverse100: 'rgba(0, 0, 0, 1)',
  },
  light: {
    '100': 'rgba(0, 0, 0, 1)',
    '80': 'rgba(0, 0, 0, 0.8)',
    '50': 'rgba(0, 0, 0, 0.5)',
    inverse100: 'rgba(255, 255, 255, 1)',
  },
}

// ContextColors are global and not color scheme specific
const contextColors: ContextColors = {
  positive: '#1FC266',
  negative: '#C2501F',
  info: '#0076CC',
  warning: '#F4B03E',
}

// Gradients are global and not color scheme specific
const gradients: Gradients = {
  backdrop: `linear-gradient(
    243.18deg, 
    rgba(86, 52, 189, 0.85) 0%, 
    rgba(49, 41, 223, 0.85) 63.54%, 
    rgba(7, 98, 149, 0.85) 100%
  )`,
  primary: `linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)`,
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
