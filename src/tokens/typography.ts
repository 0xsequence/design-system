export const fonts = {
  inherit: 'inherit',
  body: `Inter, system-ui, Roboto, "Helvetica Neue", Arial`,
  mono: `"iAWriter Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
}

export const fontSizes = {
  inherit: 'inherit',
  xsmall: '0.625rem', // 10px
  small: '0.75rem', // 12px
  normal: '0.875rem', // 14px
  medium: '1rem', // 16px
  large: '1.25rem', // 20px
  xlarge: '1.875rem', // 30px
}

export const fontWeights = {
  inherit: 'inherit',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}

export const letterSpacings = {
  inherit: 'inherit',
  none: '0',
  normal: '0.01em',
  wide: '0.03em',
}

export const lineHeights = {
  inherit: 'inherit',
  '4': '1rem', // 16px
  '5': '1.25rem', // 20px
  '6': '1.5rem', // 24px
  '7': '1.75rem', // 28px
  '9': '2.25rem', // 36px
}

// Text Variants: a special token which refers to typeography token keys rather than values so it can be used in the atoms function
type TextVariant =
  | 'inherit'
  | 'xlarge'
  | 'large'
  | 'medium'
  | 'normal'
  | 'small'
  | 'xsmall'
  | 'code'

interface TextVariantAtomProps {
  fontFamily: keyof typeof fonts
  fontSize: keyof typeof fontSizes
  lineHeight: keyof typeof lineHeights
  letterSpacing: keyof typeof letterSpacings
  fontWeight: keyof typeof fontWeights
}

export const text: Record<TextVariant, TextVariantAtomProps> = {
  inherit: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    letterSpacing: 'inherit',
    fontWeight: 'inherit',
  },
  xlarge: {
    fontFamily: 'body',
    fontSize: 'xlarge',
    lineHeight: '9',
    letterSpacing: 'none',
    fontWeight: 'bold',
  },
  large: {
    fontFamily: 'body',
    fontSize: 'large',
    lineHeight: '7',
    letterSpacing: 'normal',
    fontWeight: 'semibold',
  },
  medium: {
    fontFamily: 'body',
    fontSize: 'medium',
    lineHeight: '6',
    letterSpacing: 'normal',
    fontWeight: 'bold',
  },
  normal: {
    fontFamily: 'body',
    fontSize: 'normal',
    lineHeight: '5',
    letterSpacing: 'wide',
    fontWeight: 'normal',
  },
  small: {
    fontFamily: 'body',
    fontSize: 'small',
    lineHeight: '4',
    letterSpacing: 'wide',
    fontWeight: 'medium',
  },
  xsmall: {
    fontFamily: 'body',
    fontSize: 'xsmall',
    lineHeight: '4',
    letterSpacing: 'wide',
    fontWeight: 'bold',
  },
  code: {
    fontFamily: 'mono',
    fontSize: 'normal',
    lineHeight: '5',
    letterSpacing: 'none',
    fontWeight: 'normal',
  },
}
