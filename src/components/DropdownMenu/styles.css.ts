import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const content = style({
  backgroundColor: vars.colors.backgroundButton,
  padding: vars.space.loose,
  borderRadius: vars.radii.sm,
  width: 160,
})

export const arrow = style({
  fill: vars.colors.backgroundButton,
})

export const item = style({
  cursor: 'pointer',
})

export const indicator = style({
  width: '15px',
})
