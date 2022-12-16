import { style } from '@vanilla-extract/css'

import { atoms, responsiveStyle, vars } from '~/css'

export const root = style([
  atoms({
    display: 'flex',
    position: 'fixed',
    zIndex: '20',
    placeItems: 'center',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  }),
])

export const overlay = style([
  atoms({
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  }),
])

export const content = style([
  atoms({
    position: 'fixed',
    overflow: 'hidden',
    background: 'backgroundPrimary',
    width: 'vw',
    bottom: '0',
    outline: {
      focus: 'none',
    },
  }),
  {
    height: 'calc(100vh - 70px)',
    borderRadius: `${vars.radii.lg} ${vars.radii.lg} 0 0`,

    '@media': responsiveStyle({
      lg: {
        width: '720px',
        bottom: 'auto',
        maxHeight: 'min(800px, calc(100vh - 80px))',
        height: '800px',
        borderRadius: vars.radii.lg,
      },
    }),
  },
])

export const close = style([
  atoms({
    margin: '4',
    position: 'absolute',
    right: '0',
    top: '0',
    zIndex: '20',
  }),
])
