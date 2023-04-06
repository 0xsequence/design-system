import { keyframes, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { vars } from '~/css'

export const viewport = style({
  position: 'fixed',
  bottom: '0',
  right: '0',
  padding: vars.space[4],
  paddingTop: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
  zIndex: '1000',
  outline: 'none',
  listStyle: 'none',
  width: '100%',
  maxWidth: '532px',
})

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
