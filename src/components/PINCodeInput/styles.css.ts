import { style } from '@vanilla-extract/css'

import { focusRing, vars } from '~/css'

import { textVariants } from '../Text'

export const digitText = style([
  textVariants({ variant: 'large' }),
  {
    width: '40px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    background: vars.colors.backgroundSecondary,
    borderRadius: vars.radii.sm,
    color: vars.colors.text100,
  },
])

export const digitInput = style([
  textVariants({ variant: 'large' }),
  {
    height: '48px',
    width: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    border: 'none',
    borderRadius: vars.radii.sm,
    color: vars.colors.text100,
    background: 'transparent',
    textAlign: 'center',
    caretColor: 'transparent',

    ':disabled': {
      cursor: 'default',
      opacity: '0.5',
    },

    '::selection': {
      background: 'transparent',
    },

    boxShadow: `0 0 0 ${vars.borderWidths.thin} ${vars.colors.borderNormal} inset`,

    selectors: {
      '&:hover:not(&:disabled)': {
        borderColor: vars.colors.borderFocus,
      },
    },
  },
  focusRing,
])
