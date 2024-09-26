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

type ColorPaletteKey =
  | 'grey'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'indigo'
  | 'violet'

interface ColorPalette {
  '50': string
  '100': string
  '200': string
  '300': string
  '400': string
  '500': string
  '600': string
  '700': string
  '800': string
  '900': string
  '950': string
}

export const palettes = {
  grey: {
    50: '#D1D1D1',
    100: '#B0B0B0',
    200: '#888888',
    300: '#6D6D6D',
    400: '#5D5D5D',
    500: '#4F4F4F',
    600: '#454545',
    700: '#3D3D3D',
    800: '#262626',
    900: '#1B1B1B',
    950: '#101010',
  },
  red: {
    50: '#FDF7EF',
    100: '#FBECD9',
    200: '#F6D7B2',
    300: '#F1BB80',
    400: '#EA954D',
    500: '#E5792A',
    600: '#D66020',
    700: '#C2501F',
    800: '#8E3B1E',
    900: '#72331C',
    950: '#3E170C',
  },
  green: {
    50: '#F0FDF5',
    100: '#DCFCE9',
    200: '#BAF8D4',
    300: '#85F0B3',
    400: '#48E089',
    500: '#1FC266',
    600: '#14A554',
    700: '#148144',
    800: '#156639',
    900: '#135431',
    950: '#042F19',
  },
  yellow: {
    50: '#FBFAEB',
    100: '#F6F2CB',
    200: '#EFE499',
    300: '#E5CE5F',
    400: '#DDB938',
    500: '#CDA125',
    600: '#B07E1E',
    700: '#8D5C1B',
    800: '#754A1E',
    900: '#653F1E',
    950: '#3A200E',
  },
  blue: {
    50: '#F0F8FF',
    100: '#E0F0FE',
    200: '#B9E0FE',
    300: '#7CC8FD',
    400: '#36AEFA',
    500: '#0C94EB',
    600: '#0076CC',
    700: '#015CA3',
    800: '#064F86',
    900: '#0B426F',
    950: '#072A4A',
  },
  indigo: {
    50: '#F2F2FF',
    100: '#E9E7FF',
    200: '#D3D1FF',
    300: '#B3ADFF',
    400: '#8E7EFF',
    500: '#6A4AFF',
    600: '#5826FF',
    700: '#4411E1',
    800: '#3D10C7',
    900: '#340FA3',
    950: '#1C066F',
  },
  violet: {
    50: '#F3F2FF',
    100: '#EBE8FF',
    200: '#D9D3FF',
    300: '#BDB0FF',
    400: '#9D84FF',
    500: '#7F52FF',
    600: '#7537F9',
    700: '#601CE5',
    800: '#5117C0',
    900: '#43159D',
    950: '#270A6B',
  },
} satisfies { [key in ColorPaletteKey]: ColorPalette }

export const colors: ColorSchemes & { palettes: typeof palettes } = {
  dark,
  light,
  palettes,
}
