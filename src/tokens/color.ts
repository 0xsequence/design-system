export type ColorScheme = 'dark' | 'light'

const context = {
  positive: '#1FC266',
  negative: '#C2501F',
}

type Background =
  | 'primary'
  | 'secondary'
  | 'button'
  | 'backdrop'
  | 'inverse'
  | 'glass' // lighter on dark mode
  | 'glassSecondary' // darker on dark mode

const backgrounds: { [key in ColorScheme]: { [key in Background]: string } } = {
  dark: {
    primary: '#000000',
    secondary: '#1A1A1A',
    button: '#292929',
    backdrop: 'rgba(0, 0, 0, 0.9)',
    inverse: '#ffffff',
    glass: 'rgba(85, 85, 85, 0.3)',
    glassSecondary: 'rgba(0, 0, 0, 0.5)',
  },
  light: {
    primary: '#f4f4f4',
    secondary: '#ffffff',
    button: '#f4f4f4',
    backdrop: 'rgba(255, 255, 255, 0.9)',
    inverse: '#000000',
    glass: 'rgba(159, 159, 159, 0.3)',
    glassSecondary: 'rgba(255, 255, 255, 0.5)',
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

const gradients = {
  primary: `linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)`,
  backdrop: `linear-gradient(
    243.18deg, 
    rgba(86, 52, 189, 0.85) 0%, 
    rgba(49, 41, 223, 0.85) 63.54%, 
    rgba(7, 98, 149, 0.85) 100%
  )`,
}

type TextColor = 'body' | 'faded' | 'inactive' | 'inverse' | 'overlay'

const textColors: { [key in ColorScheme]: { [key in TextColor]: string } } = {
  dark: {
    body: '#FFFFFF',
    faded: '#7F7F7F',
    inactive: '#404040',
    inverse: '#000000',
    overlay: 'rgba(255, 255, 255, 0.5)',
  },
  light: {
    body: '#222222',
    faded: '#8A8A8A',
    inactive: '#D7D7D7',
    inverse: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.5)',
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
    inherit: 'inherit',
    transparent: 'transparent',
    white: '#ffffff',
  },
  context,
  gradients,
  dark: colorSchemes.dark,
  light: colorSchemes.light,
} as const
