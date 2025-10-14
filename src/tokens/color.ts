export const colorNames = [
  'positive',
  'negative',
  'info',
  'warning',
  'primary',
  'secondary',
  'muted',
  'inverse',
  'backgroundPrimary',
  'backgroundSecondary',
  'backgroundMuted',
  'backgroundInverse',
  'backgroundOverlay',
  'backgroundRaised',
  'borderNormal',
  'borderFocus',
  'borderError',
  'buttonGlass',
  'buttonEmphasis',
  'buttonInverse',
  'gradientBackdrop',
  'gradientPrimary',
  'gradientSecondary',
  'gradientSkeleton',
] as const

export type ColorName = (typeof colorNames)[number]

export type ColorTokens = { [key in ColorName]: string }
