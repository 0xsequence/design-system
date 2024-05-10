import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, selectorize } from '~/css'

export const root = recipe({
  base: atoms({
    display: 'flex',
    placeItems: 'center',
    overflow: 'hidden',
  }),

  variants: {
    size: {
      xs: {
        width: '12px',
        height: '12px',
      },

      sm: {
        width: '20px',
        height: '20px',
      },

      md: {
        width: '32px',
        height: '32px',
      },

      lg: {
        width: '40px',
        height: '40px',
      },

      xl: {
        width: '64px',
        height: '64px',
      },
    },

    borderRadius: {
      circle: atoms({ borderRadius: 'circle' }),
      lg: atoms({ borderRadius: 'lg' }),
      md: atoms({ borderRadius: 'md' }),
      sm: atoms({ borderRadius: 'sm' }),
    },
  },
})

export type RootVariants = RecipeVariants<typeof root>

export const img = style({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  width: '100%',

  selectors: {
    [`${selectorize(root({ size: 'xs' }))} &`]: {
      maxWidth: '16px',
      maxHeight: '16px',
    },

    [`${selectorize(root({ size: 'sm' }))} &`]: {
      maxWidth: '20px',
      maxHeight: '20px',
    },

    [`${selectorize(root({ size: 'md' }))} &`]: {
      maxWidth: '32px',
      maxHeight: '32px',
    },

    [`${selectorize(root({ size: 'lg' }))} &`]: {
      maxWidth: '40px',
      maxHeight: '40px',
    },

    [`${selectorize(root({ size: 'xl' }))} &`]: {
      maxWidth: '64px',
      maxHeight: '64px',
    },
  },
})
