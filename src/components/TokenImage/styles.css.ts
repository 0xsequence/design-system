import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, selectorize } from '~/css'

export const root = recipe({
  base: atoms({
    position: 'relative',
    display: 'flex',
    placeItems: 'center',
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
        fontSize: '9px',
      },

      lg: {
        width: '40px',
        height: '40px',
        fontSize: '11px',
      },

      xl: {
        width: '64px',
        height: '64px',
        fontSize: '16px',
      },
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
      maxWidth: '12px',
      maxHeight: '12px',
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

export const fallback = style([
  atoms({
    background: 'backgroundSecondary',
    borderRadius: 'circle',
    width: 'full',
    height: 'full',
    display: 'flex',
    placeItems: 'center',
    overflow: 'hidden',
  }),
  {
    fontSize: 'inherit',
  },
])

// When using `withNetwork` prop we need to cut out the bottom right corner so the network image can be displayed
// with a cutout effect showing the background behind the token image
export const cutout = style({
  maskImage: `radial-gradient(
    circle at 82% 82%,
    transparent 22%,
    black 0
  )`,
})
