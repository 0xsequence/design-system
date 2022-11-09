import { style } from '@vanilla-extract/css'

import { vars } from '~/css'

export const root = style({
  borderRadius: vars.radii.sm,
  overflow: 'hidden',
  flexShrink: '0',
})

export const blockies = style({
  imageRendering: 'pixelated', // 'crisp-edges'
})
