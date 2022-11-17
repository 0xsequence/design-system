import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

export const COLLAPSED_HEIGHT = '65px'

export const root = style([
  atoms({
    borderRadius: 'md',
    background: 'backgroundSecondary',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '5',
  }),
  {
    minHeight: COLLAPSED_HEIGHT,
  },
])

export const trigger = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    padding: '4',
  }),
  {
    border: 'none',
    appearance: 'none',
    height: COLLAPSED_HEIGHT,
    width: '100%',
    cursor: 'pointer',
    userSelect: 'none',
  },
])

export const content = style([
  atoms({
    paddingTop: '0',
    paddingX: '4',
    paddingBottom: '4',
  }),
  {
    width: '100%',
    transformOrigin: 'top',
  },
])

export const label = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
  }),
  {
    height: '30px',
  },
])

export const icon = recipe({
  base: {
    color: vars.colors.white,
    position: 'absolute',
    // right: '-6px',
    right: 0,
    marginRight: '15px',
    transition: 'all 0.1s linear',
    opacity: 0.7,
  },

  variants: {
    expanded: {
      true: {
        transform: 'rotate(-90deg)',
      },
    },
  },
})
