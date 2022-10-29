import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const content = style({
  background: vars.colors.backgroundInverse,
  fill: vars.colors.backgroundInverse,
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  borderRadius: vars.radii.sm,
  padding: vars.space.md,
})
