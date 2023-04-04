import { keyframes, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { breakpoints, responsiveStyle, vars } from '~/css'

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

  '@media': responsiveStyle({
    sm: {
      width: '100%',
    },

    md: {
      width: `${breakpoints.md}px`,
    },
  }),
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
  },
  to: {
    transform: 'translateX(0)',
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
    selectors: {
      '&[data-state="open"]': {
        animation: `${slideIn} 150ms ease-out`, // cubic-bezier(0.16, 1, 0.3, 1)
      },

      '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
      },

      '&[data-swipe="move"]': {
        transform: `translateX(var(--radix-toast-swipe-move-x))`,
      },

      '&[data-swipe="cancel"]': {
        transform: `translateX(0)`,
        transition: `transform 200ms ease-out`,
      },

      '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out`,
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
