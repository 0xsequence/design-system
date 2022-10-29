import { style } from '@vanilla-extract/css'

import { vars, typography } from '~/css'

export const content = style([
  typography.b2,
  {
    background: vars.colors.backgroundInverse,
    fill: vars.colors.backgroundInverse,
    color: vars.colors.textInverse,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
    borderRadius: vars.radii.sm,
    padding: vars.space.md,
  },
])
