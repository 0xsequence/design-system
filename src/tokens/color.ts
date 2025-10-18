export const colorNames = [
  'positive',
  'negative',
  'info',
  'warning',
  'destructive',
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
  'backgroundGlass',
  'borderNormal',
  'borderFocus',
  'gradientBackdrop',
  'gradientPrimary',
  'gradientSecondary',
  'gradientSkeleton',
] as const

export type ColorName = (typeof colorNames)[number]

export type ColorTokens = { [key in ColorName]: string }
