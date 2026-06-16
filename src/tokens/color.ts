export const colorNames = [
  'brand',

  'positive',
  'negative',
  'info',
  'warning',
  'destructive',

  'primary',
  'muted',
  'inverse',
  'buttonPrimary',

  'backgroundPrimary',
  'backgroundSecondary',
  'backgroundMuted',
  'backgroundInverse',
  'backgroundOverlay',
  'backgroundRaised',
  'backgroundInput',
  'backgroundHover',
  'backgroundActive',
  'backgroundTooltip',

  'borderNormal',
  'borderHover',
  'borderFocus',
  'borderButton',
  'borderCard',

  'gradientSkeleton',

  'sidebar',
  'sidebarForeground',
  'sidebarAccent',
  'sidebarAccentForeground',
  'sidebarBorder',
  'sidebarRing',
] as const

export type ColorName = (typeof colorNames)[number]

export type ColorTokens = { [key in ColorName]: string }
