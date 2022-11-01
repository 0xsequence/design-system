import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const trigger = style({
  appearance: 'none',
  border: 'none',
  background: 'none',
  height: '100%',
  width: '50%',
  position: 'relative',
  zIndex: '2',
  cursor: 'pointer',
  userSelect: 'none',

  color: vars.colors.textFaded,

  selectors: {
    '&[data-state="active"]': {
      color: vars.colors.textBody,
    },
    '&[disabled]': {
      opacity: 0.3,
      pointerEvents: 'none',
    },
  },
})

export const list = style({
  background: vars.colors.backgroundSecondary,
  width: '100%',
  height: '50px',
  borderRadius: vars.radii.medium,
  position: 'relative',
})

export const selectorContainer = style({
  height: '32px',
  display: 'flex',
  top: '9px',
  bottom: '9px',
  left: '15px',
  right: '15px',
  position: 'absolute',
})

export const selector = style({
  background: vars.colors.backgroundButton,
  position: 'absolute',
  width: '50%',
  height: '100%',
  top: '0',
  left: '0',

  zIndex: '1',

  borderRadius: vars.radii.medium,

  transition: 'transform 200ms ease-out',
})
