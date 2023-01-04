import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const root = style({
  width: '48px',
  height: '28px',
  background: vars.colors.backgroundControl,
  padding: vars.space[1],
  borderRadius: vars.radii.circle,
  position: 'relative',
  cursor: 'pointer',

  selectors: {
    '&[data-state="checked"]': {
      background: vars.colors.gradientPrimary,
    },

    '&:disabled': {
      cursor: 'default',
      opacity: '0.5',
    },
  },
})

export const thumb = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: vars.space[5],
  height: vars.space[5],
  background: vars.colors.backgroundInverse,
  borderRadius: vars.radii.circle,
  transition: 'transform 100ms ease-out, background 100ms ease-out',
  transform: 'translateX(0)',
  willChange: 'transform',

  selectors: {
    '&[data-state="checked"]': {
      transform: `translateX(${vars.space[5]})`,
    },

    [`${root}:hover:not([data-state="checked"]) &`]: {},
  },
})
