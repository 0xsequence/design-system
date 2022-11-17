import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const content = style([
  atoms({
    background: 'backgroundSecondary',
    padding: '6',
    borderRadius: 'sm',
  }),
  {
    width: 160,
  },
])

export const arrow = style({
  fill: vars.colors.backgroundSecondary,
})

export const item = style({
  cursor: 'pointer',
})

export const indicator = style({
  width: '15px',
})
