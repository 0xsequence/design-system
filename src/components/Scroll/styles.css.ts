import { recipe } from '@vanilla-extract/recipes'

import { atoms, vars } from '~/css'

const SHADOW_WIDTH = vars.space[4]

export const scroll = recipe({
  base: atoms({
    width: 'full',
    height: 'full',
  }),

  variants: {
    direction: {
      vertical: {
        height: '100%',
        overflowY: 'auto',
        overscrollBehaviorY: 'contain',
      },

      horizontal: {
        overflowX: 'auto',
        overscrollBehaviorX: 'contain',
        width: '100%',
      },
    },
  },
})

export const overlay = recipe({
  variants: {
    shadows: {
      true: {
        '::before': {
          content: '',
          position: 'absolute',
          zIndex: 1,
          pointerEvents: 'none',
        },

        '::after': {
          content: '',
          position: 'absolute',
          zIndex: 1,
          pointerEvents: 'none',
        },
      },

      false: {
        '::before': {
          display: 'none',
        },
        '::after': {
          display: 'none',
        },
      },
    },

    direction: {
      vertical: {
        '::before': {
          background: `linear-gradient(to top, transparent 0%, ${vars.colors.backgroundPrimary} 100%)`,
          left: 0,
          top: 0,
          width: '100%',
          height: SHADOW_WIDTH,
        },

        '::after': {
          background: `linear-gradient(to bottom, transparent 0%, ${vars.colors.backgroundPrimary} 100%)`,
          left: 0,
          bottom: 0,
          width: '100%',
          height: SHADOW_WIDTH,
        },
      },

      horizontal: {
        '::before': {
          background: `linear-gradient(to left, transparent 0%, ${vars.colors.backgroundPrimary} 100%)`,
          left: 0,
          top: 0,
          height: '100%',
          width: SHADOW_WIDTH,
        },

        '::after': {
          background: `linear-gradient(to right, transparent 0%, ${vars.colors.backgroundPrimary} 100%)`,
          right: 0,
          top: 0,
          height: '100%',
          width: SHADOW_WIDTH,
        },
      },
    },
  },
})
