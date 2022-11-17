import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const root = style({
  cursor: 'pointer',
  width: '48px',
  height: '28px',
  background: vars.colors.backgroundControl,
  padding: vars.space['1'],
  borderRadius: vars.radii.circle,
  position: 'relative',

  transition: 'background 100ms ease-out',

  selectors: {
    '&:hover': {
      borderColor: vars.colors.borderFocus,
    },

    '&[data-state="checked"]': {
      background: vars.colors.gradientPrimary,
    },
  },
})

export const thumb = style({
  position: 'absolute',
  top: 3,
  left: 3,
  width: 22,
  height: 22,
  background: vars.colors.backgroundInverse,
  borderRadius: vars.radii.circle,
  transition: 'transform 100ms ease-out, background 100ms ease-out',
  transform: 'translateX(0)',
  willChange: 'transform',

  selectors: {
    '&[data-state="checked"]': {
      transform: 'translateX(20px)',
      background: vars.colors.backgroundInverse,
    },

    [`${root}:hover:not([data-state="checked"]) &`]: {
      background: vars.colors.backgroundInverse,
    },
  },
})
