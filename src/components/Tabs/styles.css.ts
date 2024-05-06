import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const list = style([
  atoms({
    display: 'flex',
    position: 'relative',
    width: 'full',
    borderRadius: 'md',
    background: 'backgroundSecondary',
    height: '12',
  }),
  {
    selectors: {
      '&:has(:focus-visible)': {
        outline: 'none',
        boxShadow: `0 0 0 ${vars.borderWidths.thick} ${vars.colors.borderFocus} inset`,
      },
    },
  },
])

export const trigger = style([
  atoms({
    width: 'full',
    height: 'full',
    borderRadius: 'sm',
    cursor: 'pointer',
    position: 'relative',
    background: 'transparent',
    userSelect: 'none',
    color: 'text80',
    focusRing: 'none',
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

export const selector = style([
  atoms({
    position: 'absolute',
    borderRadius: 'sm',
    top: '0',
    left: '0',
    height: '8',
    background: 'buttonGlass',
    pointerEvents: 'none',
  }),
  {
    transition: 'transform 200ms ease-out',
  },
])

export const content = atoms({ focusRing: 'none' })
