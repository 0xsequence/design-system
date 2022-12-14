import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const list = style([
  atoms({
    position: 'relative',
    width: 'full',
    borderRadius: 'md',
    background: 'backgroundSecondary',
    height: '12',
  }),
  {
    selectors: {
      '&:focus-within': {
        outlineColor: vars.colors.borderFocus,
        outlineStyle: 'solid',
        outlineOffset: `calc(${vars.borderWidths.thick} * -1)`,
        outlineWidth: vars.borderWidths.thick,
      },
    },
  },
])

export const trigger = style([
  atoms({
    height: 'full',
    width: '1/2',
    borderRadius: 'sm',
    outline: 'none',
    cursor: 'pointer',
    position: 'relative',
    background: 'transparent',
    userSelect: 'none',
    color: 'text80',
  }),
  {
    appearance: 'none',
    border: 'none',
    zIndex: '2',

    selectors: {
      '&[data-state="active"]': {
        color: vars.colors.text100,
      },
      '&[disabled]': {
        opacity: 0.5,
        // pointerEvents: 'none',
      },
    },
  },
])

export const selectorContainer = atoms({
  position: 'absolute',
  inset: '2',
  height: '8',
  display: 'flex',
})

export const selector = style([
  atoms({
    position: 'absolute',
    borderRadius: 'sm',
    top: '0',
    left: '0',
    width: '1/2',
    height: '8',
    background: 'buttonGlass',
    pointerEvents: 'none',
  }),
  {
    transition: 'transform 200ms ease-out',
  },
])

export const content = style({
  outline: 'none',
})
