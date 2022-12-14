import { networkColors } from './network'

export type ColorScheme = 'dark' | 'light'

type Context = 'positive' | 'negative' | 'info' | 'warning'

const context: { [key in Context]: string } = {
  positive: '#1FC266',
  negative: '#C2501F',
  info: '#0076CC',
  warning: '#F4B03E',
}

type Background = 'primary' | 'secondary' | 'control' | 'inverse'

const backgrounds: { [key in ColorScheme]: { [key in Background]: string } } = {
  dark: {
    primary: 'rgba(0, 0, 0, 1)',
    secondary: 'rgba(255, 255, 255, 0.1)',
    control: 'rgba(255, 255, 255, 0.25)',
    inverse: 'rgba(255, 255, 255, 1)',
  },
  light: {
    primary: 'rgba(244, 244, 244, 1)',
    secondary: 'rgba(0, 0, 0, 0.1)',
    control: 'rgba(0, 0, 0, 0.25)',
    inverse: 'rgba(0, 0, 0, 1)',
  },
}

type BorderColor = 'normal' | 'focus'

const borderColors: { [key in ColorScheme]: { [key in BorderColor]: string } } =
  {
    dark: {
      normal: 'rgba(255, 255, 255, 0.25)',
      focus: 'rgba(255, 255, 255, 0.5)',
    },
    light: {
      normal: 'rgba(0, 0, 0, 0.25)',
      focus: 'rgba(0, 0, 0, 0.5)',
    },
  }

type Button = 'glass' | 'emphasis' | 'inverse'

const buttons: { [key in ColorScheme]: { [key in Button]: string } } = {
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

type Gradient = 'backdrop' | 'primary' | 'secondary'

const gradients: { [key in Gradient]: string } = {
  backdrop: `linear-gradient(
    243.18deg, 
    rgba(86, 52, 189, 0.85) 0%, 
    rgba(49, 41, 223, 0.85) 63.54%, 
    rgba(7, 98, 149, 0.85) 100%
  )`,
  primary: `linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)`,
  secondary: `linear-gradient(32.51deg, #951990 -15.23%, #3A35B1 48.55%, #20A8B0 100%)`,
}

type TextColor = '100' | '80' | '50' | 'inverse100'

const textColors: { [key in ColorScheme]: { [key in TextColor]: string } } = {
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

export const colorSchemes = {
  dark: {
    background: backgrounds.dark,
    border: borderColors.dark,
    button: buttons.dark,
    text: textColors.dark,
  },
  light: {
    background: backgrounds.light,
    border: borderColors.light,
    button: buttons.light,
    text: textColors.light,
  },
} as const

export const colors = {
  base: {
    black: '#000000',
    inherit: 'inherit',
    transparent: 'transparent',
    white: '#ffffff',
  },
  context,
  gradients,
  networkColors,
  dark: colorSchemes.dark,
  light: colorSchemes.light,
} as const
