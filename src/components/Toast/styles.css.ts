import { keyframes, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

export const viewport = style([
  atoms({
    position: 'fixed',
    right: '0',
    bottom: '0',
    focusRing: 'none',
    width: 'full',
    gap: '2',
    flexDirection: 'column',
  }),
  {
    padding: vars.space[4],
    paddingTop: 0,
    zIndex: '1000',
    listStyle: 'none',
    maxWidth: '532px',
  },
])

export const swipeOut = keyframes({
  from: {
    transform: `translateX(var(--radix-toast-swipe-end-x))`,
  },
  to: {
    transform: `translateX(100%)`,
  },
})

export const toast = recipe({
  base: {
    willChange: 'transform, opacity',

    selectors: {
      // '&[data-state="open"]': {
      // },

      // '&[data-state="closed"]': {
      // },

      '&[data-swipe="move"]': {
        transform: `translateX(var(--radix-toast-swipe-move-x)) !important`,
      },

      '&[data-swipe="cancel"]': {
        transition: `transform 200ms ease-out`,
        transform: `translateX(0)`,
      },

      '&[data-swipe="end"]': {
        animation: `${swipeOut} 200ms ease-out`,
      },
    },
  },
  variants: {
    variant: {
      normal: {},
      success: {
        color: 'positive',
      },
      error: {
        color: 'negative',
      },
    },
  },
})

export type ToastVariants = RecipeVariants<typeof toast>
