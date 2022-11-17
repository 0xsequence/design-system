import { style } from '@vanilla-extract/css'

import { atoms, breakpoints, vars } from '~/css'

export const root = style([
  atoms({
    display: 'flex',
    position: 'fixed',
    zIndex: '20',
    placeItems: 'center',
  }),
  {
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
  },
])

export const overlay = style([
  atoms({
    position: 'fixed',
    background: 'gradientBackdrop',
  }),
  {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
])

export const content = style([
  atoms({
    position: 'fixed',
    overflow: 'hidden',
    background: 'backgroundSecondary',
    padding: '4',
  }),
  {
    outline: 'none',
    width: '100vw',
    bottom: 0,
    borderRadius: `${vars.radii.lg} ${vars.radii.lg} 0 0`,
    height: 'calc(100vh - 70px)',

    '@media': {
      [`screen and (min-width: ${breakpoints.lg}px)`]: {
        width: '720px',
        bottom: 'auto',
        maxHeight: 'min(800px, calc(100vh - 80px))',
        height: '800px',
        borderRadius: vars.radii.lg,
      },
    },
  },
])

export const close = style({
  appearance: 'none',
  border: 'none',
  background: '$scale12',
  color: '$background',
  position: 'absolute',
  cursor: 'pointer',
  right: 0,
  top: 0,
  borderRadius: '$circle',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px',
  opacity: '0.5',
  pointerEvents: 'auto',
  zIndex: 10,

  ':hover': {
    opacity: 1,
  },
})
