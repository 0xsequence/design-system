import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const content = style([
  atoms({
    backdropFilter: 'blur',
    background: 'buttonGlass',
    padding: '2',
    borderRadius: 'sm',
  }),
  {
    width: 160,
  },
])

export const arrow = style({
  fill: vars.colors.buttonGlass,
})

export const item = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 'xs',
    paddingX: '2',
    paddingY: '1',
    cursor: 'pointer',
    focusRing: { focus: 'none' },
    userSelect: 'none',
    paddingLeft: '6',
    position: 'relative',
    color: 'text50',
  }),
  {
    selectors: {
      '&[data-disabled]': {
        opacity: '0.5',
        cursor: 'default',
        pointerEvents: 'none',
      },

      '&[data-highlighted]': {
        background: vars.colors.backgroundSecondary,
        color: 'white',
      },
    },
  },
])

export const indicator = style({
  position: 'absolute',
  left: 0,
  width: vars.space[6],
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const separator = style({})
