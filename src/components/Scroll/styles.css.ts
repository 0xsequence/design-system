import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const scroll = style({
  position: 'relative',
  overflowY: 'auto',
  overscrollBehaviorY: 'contain',
  height: '100%',

  '::before': {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: vars.space[5],
    background: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)`,
    opacity: 0.6,
    zIndex: 10,
    pointerEvents: 'none',
  },
})