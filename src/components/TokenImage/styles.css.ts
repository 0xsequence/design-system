import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

import { textVariants } from '../Text/styles.css'

export const root = recipe({
  base: atoms({
    display: 'flex',
    placeItems: 'center',
    borderRadius: 'circle',
    overflow: 'hidden',
  }),

  variants: {
    size: {
      xs: {
        width: '12px',
        height: '12px',
        fontSize: '4px',
      },

      sm: {
        width: '20px',
        height: '20px',
        fontSize: '8px',
      },

      md: {
        width: '32px',
        height: '32px',
        fontSize: '10px',
      },

      lg: {
        width: '40px',
        height: '40px',
        fontSize: '14px',
      },
    },
  },
})

export const img = style({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  width: '100%',

  selectors: {
    [`${root({ size: 'xs' })} &`]: {
      maxWidth: '16px',
      maxHeight: '16px',
    },

    [`${root({ size: 'sm' })} &`]: {
      maxWidth: '24px',
      maxHeight: '24px',
    },

    [`${root({ size: 'md' })} &`]: {
      maxWidth: '32px',
      maxHeight: '32px',
    },

    [`${root({ size: 'lg' })} &`]: {
      maxWidth: '64px',
      maxHeight: '64px',
    },
  },
})

export const fallback = style([
  textVariants({ variant: 'normal' }),
  {
    background: 'gray',
    color: 'black',
    //background: vars.colors.scale7,
    //color: vars.colors.scale9,
    fontWeight: 'bold',
    borderRadius: vars.radii.circle,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'inherit',
  },
])
