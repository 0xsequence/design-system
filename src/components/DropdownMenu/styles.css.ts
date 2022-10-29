import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const content = style({
  backgroundColor: vars.colors.backgroundComponent,
  padding: vars.space.lg,
  borderRadius: vars.radii.sm,
  width: 160,
})

export const arrow = style({
  fill: vars.colors.backgroundComponent,
})

export const item = style({
  cursor: 'pointer',
})

export const indicator = style({
  width: '15px',
})
