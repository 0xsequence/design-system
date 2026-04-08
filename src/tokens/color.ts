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
  
  'borderNormal',
  'borderHover',
  'borderFocus',
  'borderButton',
  'borderCard',

  'gradientBackdrop',
  'gradientPrimary',
  'gradientSecondary',
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
