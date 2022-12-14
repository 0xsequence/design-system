import { recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const tab = recipe({
  variants: {
    active: {
      true: atoms({
        background: 'buttonInverse',
        color: 'textInverse100',
        opacity: {
          hover: '100',
        },
      }),
      false: atoms({
        background: 'transparent',
        color: 'text80',
      }),
    },

    disabled: {
      true: atoms({
        opacity: '50',
      }),
    },
  },
})
