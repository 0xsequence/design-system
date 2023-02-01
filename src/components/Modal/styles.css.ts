import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

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

export const contentVariants = recipe({
  base: [
    atoms({
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      overflow: 'hidden',
      background: 'backgroundPrimary',
      bottom: '0',
      outline: {
        focus: 'none',
      },
    }),
    {
      borderRadius: `${vars.radii.lg} ${vars.radii.lg} 0 0`,
      '@media': responsiveStyle({
        lg: {
          bottom: 'auto',
          borderRadius: vars.radii.lg,
        },
      }),
    },
  ],
  variants: {
    size: {
      sm: {
        width: '100vw',
        minHeight: 100,
        maxHeight: 'calc(100vh - 80px)',

        '@media': responsiveStyle({
          lg: {
            width: 'fit-content',
            maxWidth: '540px',
            maxHeight: 'min(800px, calc(100vh - 80px))',
          },
        }),
      },
      lg: {
        width: '100vw',
        height: 'calc(100vh - 70px)',

        '@media': responsiveStyle({
          lg: {
            width: '720px',
            maxHeight: 'min(800px, calc(100vh - 80px))',
            height: '800px',
          },
        }),
      },
    },

    autoHeight: { true: {} },
  },

  compoundVariants: [
    {
      variants: { autoHeight: true, size: 'lg' },
      style: { height: 'auto !important' },
    },
  ],
})

export type ContentVariants = RecipeVariants<typeof contentVariants>

export const close = style([
  atoms({
    margin: '4',
    position: 'absolute',
    right: '0',
    top: '0',
    zIndex: '20',
  }),
])
