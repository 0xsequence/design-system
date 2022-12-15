import { style } from '@vanilla-extract/css'

import { atoms } from '~/css'

export const COLLAPSED_HEIGHT = '64px'

export const root = style([
  atoms({
    borderRadius: 'md',
    background: 'backgroundSecondary',
    position: 'relative',
    overflow: 'hidden',
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
    width: 'full',
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: 'md',
  }),
  {
    border: 'none',
    appearance: 'none',
    height: COLLAPSED_HEIGHT,
  },
])

export const content = style([
  atoms({
    paddingTop: '0',
    paddingX: '4',
    paddingBottom: '4',
    width: 'full',
  }),
  {
    transformOrigin: 'top',
  },
])

export const icon = style({
  height: '1.25rem',
  width: '1.25rem',
  display: 'block',
})
