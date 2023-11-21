export type ColorScheme = 'dark' | 'light'

type ColorSchemes<T = ColorTokens> = { [key in ColorScheme]: T }

export interface ColorTokens {
  black: string
  white: string
  inherit: string
  transparent: string

  // Status colors
  positive: string
  negative: string
  info: string
  warning: string

  // Text colors
  text100: string
  text80: string
  text50: string
  textInverse100: string

  // Background colors
  backgroundPrimary: string
  backgroundSecondary: string
  backgroundContrast: string
  backgroundMuted: string
  backgroundControl: string
  backgroundInverse: string
  backgroundBackdrop: string
  backgroundOverlay: string
  backgroundRaised: string

  // Border colors
  borderNormal: string
  borderFocus: string

  // Button colors
  buttonGlass: string
  buttonEmphasis: string
  buttonInverse: string

  // Gradients
  gradientBackdrop: string
  gradientPrimary: string
  gradientSecondary: string

  // Network colors
  arbitrumDark: string
  arbitrumLight: string
  avalanceDark: string
  avalanceLight: string
  bscDark: string
  bscLight: string
  ethereumDark: string
  ethereumLight: string
  gnosisDark: string
  gnosisLight: string
  polygonDark: string
  polygonLight: string
}

const defaultColors = {
  black: '#000000',
  white: '#ffffff',
  inherit: 'inherit',
  transparent: 'transparent',

  positive: '#1FC266',
  negative: '#C2501F',
  info: '#0076CC',
  warning: '#F4B03E',

  gradientBackdrop: `linear-gradient(
    243.18deg, 
    rgba(86, 52, 189, 0.85) 0%, 
    rgba(49, 41, 223, 0.85) 63.54%, 
    rgba(7, 98, 149, 0.85) 100%
  )`,
  gradientPrimary: `linear-gradient(89.69deg, #4411E1 0.27%, #7537F9 99.73%)`,
  gradientSecondary: `linear-gradient(32.51deg, #951990 -15.23%, #3A35B1 48.55%, #20A8B0 100%)`,

  arbitrumDark: '#212D44',
  arbitrumLight: '#93D4FF',
  avalanceDark: '#810C0C',
  avalanceLight: '#FF8080',
  bscDark: '#584508',
  bscLight: '#FCCF43',
  ethereumDark: '#132362',
  ethereumLight: '#AABBFF',
  gnosisDark: '#084246',
  gnosisLight: '#8CF6FD',
  polygonDark: '#350881',
  polygonLight: '#C7A6FF',
}

const dark: ColorTokens = {
  ...defaultColors,

  text100: 'rgba(255, 255, 255, 1)',
  text80: 'rgba(255, 255, 255, 0.8)',
  text50: 'rgba(255, 255, 255, 0.5)',
  textInverse100: 'rgba(0, 0, 0, 1)',

  backgroundPrimary: 'rgba(0, 0, 0, 1)',
  backgroundSecondary: 'rgba(255, 255, 255, 0.1)',
  backgroundContrast: 'rgba(0, 0, 0, 0.5)',
  backgroundMuted: 'rgba(255, 255, 255, 0.05)',
  backgroundControl: 'rgba(255, 255, 255, 0.25)',
  backgroundInverse: 'rgba(255, 255, 255, 1)',
  backgroundBackdrop: 'rgba(34, 34, 34, 0.9)',
  backgroundOverlay: 'rgba(0, 0, 0, 0.7)',
  backgroundRaised: 'rgba(54, 54, 54, 0.7)',

  buttonGlass: 'rgba(255, 255, 255, 0.15)',
  buttonEmphasis: 'rgba(0, 0, 0, 0.5)',
  buttonInverse: 'rgba(255, 255, 255, 0.8)',

  borderNormal: 'rgba(255, 255, 255, 0.25)',
  borderFocus: 'rgba(255, 255, 255, 0.5)',
}

const light: ColorTokens = {
  ...defaultColors,

  text100: 'rgba(0, 0, 0, 1)',
  text80: 'rgba(0, 0, 0, 0.8)',
  text50: 'rgba(0, 0, 0, 0.5)',
  textInverse100: 'rgba(255, 255, 255, 1)',

  backgroundPrimary: 'rgba(244, 244, 244, 1)',
  backgroundSecondary: 'rgba(0, 0, 0, 0.1)',
  backgroundContrast: 'rgba(244, 244, 244, 0.5)',
  backgroundMuted: 'rgba(0, 0, 0, 0.05)',
  backgroundControl: 'rgba(0, 0, 0, 0.25)',
  backgroundInverse: 'rgba(0, 0, 0, 1)',
  backgroundBackdrop: 'rgba(221, 221, 221, 0.9)',
  backgroundOverlay: 'rgba(244, 244, 244, 0.7)',
  backgroundRaised: 'rgba(192, 192, 192, 0.7)',

  buttonGlass: 'rgba(0, 0, 0, 0.15)',
  buttonEmphasis: 'rgba(255, 255, 255, 0.5)',
  buttonInverse: 'rgba(0, 0, 0, 0.8)',

  borderNormal: 'rgba(0, 0, 0, 0.25)',
  borderFocus: 'rgba(0, 0, 0, 0.5)',
}

export const colors: ColorSchemes = {
  dark,
  light,
}
