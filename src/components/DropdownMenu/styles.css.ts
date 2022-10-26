import { style } from '@vanilla-extract/css'

import { vars } from '../../css'
import { typography } from '../../css/typography.css'

export const content = style([
  typography.b2,
  {
    backgroundColor: vars.colors.scale5,
    padding: vars.space.lg,
    color: vars.colors.scale12,
    borderRadius: vars.radii.sm,
    width: 160
  }
])

export const arrow = style({
  fill: vars.colors.scale5
})

export const item = style({
  cursor: 'pointer'
})

export const indicator = style({
  width: '15px'
})
