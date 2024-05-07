import { style } from '@vanilla-extract/css'

import { vars } from './vars.css'

export const focusRing = style({
  selectors: {
    '&:focus': {
      outline: 'none',
    },

    '&:focus-visible': {
      outline: 'none',

      // Safari does not apply a border radius to outlines so we will use a boxShadow instead to acheive that same inset effect
      boxShadow: `0 0 0 ${vars.borderWidths.thick} ${vars.colors.borderFocus} inset`,

      // Because we use a semi transparent focus ring we want to set any border color to transparent so it doesnt show through
      borderColor: 'transparent',
    },
  },
})
