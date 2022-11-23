import { recipe } from '@vanilla-extract/recipes'

import { atoms } from '~/css'

export const tab = recipe({
  variants: {
    active: {
      true: atoms({
        background: 'buttonInverse',
        color: {
          base: 'textInverse',
          disabled: 'textInactive',
        },
      }),
      false: atoms({
        background: 'transparent',
        color: {
          base: 'textFaded',
          hover: 'textBody',
          disabled: 'textInactive',
        },
      }),
    },
  },
})
