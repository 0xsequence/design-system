import { keyframes, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { vars } from '~/css'

export const viewport = style({
  position: 'fixed',
  bottom: '0',
  right: '0',
  padding: vars.space[4],
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
  zIndex: '1000',
  outline: 'none',
  listStyle: 'none',
  width: '100%',
  maxWidth: '532px',
})

export const hide = keyframes({
  from: {
    opacity: 1,
  },

  to: {
    opacity: 0,
  },
})

export const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + ${vars.space[4]}))`,
    // opacity: 0,
  },
  to: {
    transform: 'translateX(0)',
    // opacity: 1,
  },
})

export const swipeOut = keyframes({
  from: {
    transform: `translateX(var(--radix-toast-swipe-end-x))`,
  },
  to: {
    transform: `translateX(calc(100% + ${vars.space[4]}))`,
  },
})

export const toast = recipe({
  base: {
    willChange: 'transform, opacity',

    selectors: {
      '&[data-state="open"]': {
        animation: `${slideIn} 200ms ease-out`, // cubic-bezier(0.16, 1, 0.3, 1)
      },

      '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
      },

      '&[data-swipe="move"]': {
        transform: `translateX(var(--radix-toast-swipe-move-x))`,
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
