import { style } from '@vanilla-extract/css'

import { textVariants } from '~/components/Text/styles.css'
import { atoms, vars } from '~/css'

export const wrap = style([
  atoms({
    display: 'inline-flex',
    alignItems: 'center',
    background: 'transparent',
    color: {
      base: 'textBody',
      disabled: 'textInactive',
    },
    opacity: {
      base: '100',
      hover: '80',
      disabled: '50',
    },
    borderColor: 'borderNormal',
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 'thin',
    paddingX: '4',
    gap: '2',
  }),
  {
    cursor: 'text',
    height: '52px',

    selectors: {
      // ':disabled, [disabled]': {
      //   cursor: 'not-allowed',
      // },

      '&:focus-within': {
        opacity: '1 !important',
        outlineColor: vars.colors.borderFocus,
        outlineStyle: 'solid',
        outlineOffset: `calc(${vars.borderWidths.thick} * -1)`,
        outlineWidth: vars.borderWidths.thick,
        borderColor: 'transparent',
      },
    },
  },
])

export const input = style([
  textVariants({ variant: 'normal' }),
  atoms({
    display: 'block',
    paddingY: '4',
    width: 'full',
    height: 'full',
    outline: 'none',
  }),
])
