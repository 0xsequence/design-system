import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { atoms, vars, typography } from '~/css'

export const COLLAPSED_HEIGHT = '65px'

export const root = style([
  atoms({
    borderRadius: 'md',
  }),
  style({
    background: vars.colors.backgroundComponent,
    minHeight: COLLAPSED_HEIGHT,
    position: 'relative',
    borderRadius: vars.radii.md,
    marginBottom: '25px',
    overflow: 'hidden',
  }),
])

export const trigger = style({
  border: 'none',
  appearance: 'none',
  background: 'none',
  height: COLLAPSED_HEIGHT,
  width: '100%',
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
})

export const content = style({
  width: '100%',
  padding: '0 15px 15px',
  transformOrigin: 'top',
})

export const label = style([
  typography.h2,
  {
    color: vars.colors.white,
    display: 'flex',
    alignItems: 'center',
    height: '30px',
  },
])

export const icon = recipe({
  base: {
    color: vars.colors.white,
    position: 'absolute',
    right: '-6px',
    marginRight: '15px',
    transition: 'all 0.1s linear',
    transform: 'rotate(90deg)',
    opacity: 0.7,
  },

  variants: {
    expanded: {
      true: {
        transform: 'rotate(0deg)',
      },
    },
  },
})
