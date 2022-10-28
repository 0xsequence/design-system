export type ColorScheme = 'dark' | 'light'

const accents = {
  positive: 'hsla(146, 73%, 44%, 1)',
  negative: 'hsla(0, 100%, 66%, 1)',
  warning: 'hsla(38, 89%, 60%, 1)',
  info: 'hsla(212, 63%, 53%, 1)',
}

type Background = 'primary' | 'secondary' | 'component' | 'backdrop' | 'inverse'

const backgrounds: { [key in ColorScheme]: { [key in Background]: string } } = {
  dark: {
    primary: '#000000',
    secondary: '#151515',
    component: 'rgba(85, 85, 85, 0.3)',
    backdrop: 'rgba(0, 0, 0, 0.9)',
    inverse: '#ffffff',
  },
  light: {
    primary: '#f4f4f4',
    secondary: '#ffffff',
    component: '#f4f4f4',
    backdrop: 'rgba(255, 255, 255, 0.9)',
    inverse: '#000000',
  },
}

type BorderColor = 'subtle' | 'normal' | 'firm' | 'inverse'

const borderColors: { [key in ColorScheme]: { [key in BorderColor]: string } } =
  {
    dark: {
      subtle: 'rgba(85, 85, 85, 0.3)',
      normal: 'rgba(255, 255, 255, 0.15)',
      firm: 'rgba(255, 255, 255, 0.5)',
      inverse: 'rgba(255, 255, 255, 0.9)',
    },
    light: {
      // TODO: update for light values
      subtle: 'rgba(85, 85, 85, 0.3)',
      normal: 'rgba(255, 255, 255, 0.15)',
      firm: 'rgba(255, 255, 255, 0.5)',
      inverse: 'rgba(255, 255, 255, 0.9)',
    },
  }

const gradients = {
  primary: `linear-gradient(
    39.17deg, 
    rgba(38, 34, 255, 0.7) -6.62%, 
    rgba(82, 7, 240, 0.7) 40.22%, 
    rgba(134, 77, 255, 0.7) 108.67%
  )`,
  backdrop: `linear-gradient(
    243.18deg, 
    rgba(86, 52, 189, 0.85) 0%, 
    rgba(49, 41, 223, 0.85) 63.54%, 
    rgba(7, 98, 149, 0.85) 100%
  )`,
}

type TextColor = 'body' | 'faded' | 'title' | 'inverse'

const textColors: { [key in ColorScheme]: { [key in TextColor]: string } } = {
  dark: {
    body: '#8a8a8a',
    faded: '#555555',
    title: '#ffffff',
    inverse: '#000000',
  },
  light: {
    body: '#8a8a8a',
    faded: '#555555',
    title: '#222222',
    inverse: '#ffffff',
  },
}

export const colorSchemes = {
  dark: {
    background: backgrounds.dark,
    text: textColors.dark,
    border: borderColors.dark,
  },
  light: {
    background: backgrounds.light,
    text: textColors.light,
    border: borderColors.light,
  },
} as const

export const colors = {
  base: {
    black: '#000000',
    transparent: 'transparent',
    white: '#ffffff',
  },
  accents,
  gradients,
  dark: colorSchemes.dark,
  light: colorSchemes.light,
} as const
