import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

export const root = style([
  atoms({
    background: 'backgroundControl',
    borderRadius: 'circle',
    padding: '1',
    position: 'relative',
    cursor: 'pointer',
  }),
  {
    width: '48px',
    height: '28px',

    selectors: {
      '&[data-state="checked"]': {
        background: vars.colors.gradientPrimary,
      },

      '&:disabled': {
        cursor: 'default',
        opacity: '0.5',
      },
    },
  },
])

export const thumb = style([
  atoms({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '5',
    height: '5',
    background: 'white',
    borderRadius: 'circle',
  }),
  {
    transition: 'transform 100ms ease-out, background 100ms ease-out',
    transform: 'translateX(0)',
    willChange: 'transform',

    selectors: {
      '&[data-state="checked"]': {
        transform: `translateX(${vars.space[5]})`,
      },

      [`${root}:hover:not([data-state="checked"]) &`]: {},
    },
  },
])
