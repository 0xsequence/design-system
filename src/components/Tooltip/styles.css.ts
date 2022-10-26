import { style } from '@vanilla-extract/css'

import { vars } from '../../css'
import { typography } from '../../css/typography.css'

export const content = style([
  typography.b2,
  {
    background: vars.colors.scale12,
    fill: vars.colors.scale12,
    color: vars.colors.scale1,
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
    borderRadius: vars.radii.sm,
    padding: vars.space.md
  }
])
