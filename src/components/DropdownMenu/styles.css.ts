import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const content = style([
  atoms({
    backdropFilter: 'blur',
    background: 'backgroundRaised',
    padding: '2',
    borderRadius: 'sm',
  }),
  {
    width: 160,
  },
])

export const arrow = style({
  fill: vars.colors.backgroundRaised,
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
    color: 'text80',
  }),
  {
    selectors: {
      '&[data-disabled]': {
        opacity: '0.8',
        cursor: 'default',
        pointerEvents: 'none',
        color: vars.colors.text50,
      },

      '&[data-highlighted]': {
        background: vars.colors.backgroundContrast,
        // color: vars.colors.text100,
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
