import { style } from '@vanilla-extract/css'

import { vars } from '../../css'

export const root = style({
  cursor: 'pointer',
  width: '45px',
  height: '30px',
  background: vars.colors.scale2,
  border: `${vars.borderWidths.thick} solid ${vars.colors.scale6}`,
  padding: vars.space.xs,
  borderRadius: vars.radii.full,
  position: 'relative',

  transition: 'background 100ms ease-out',

  selectors: {
    '&:hover': {
      borderColor: vars.colors.scale7
    },

    '&[data-state="checked"]': {
      background: vars.colors.accents.positive
    }
  }
})

export const thumb = style({
  display: 'block',
  width: 22,
  height: 22,
  background: vars.colors.scale11,
  borderRadius: vars.radii.full,
  transition: 'transform 100ms ease-out, background 100ms ease-out',
  transform: 'translateX(0)',
  willChange: 'transform',

  selectors: {
    '&[data-state="checked"]': {
      transform: 'translateX(15px)',
      background: 'white'
    },

    [`${root}:hover:not([data-state="checked"]) &`]: {
      background: vars.colors.scale12
    }
  }
})
