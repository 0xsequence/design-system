import { style } from '@vanilla-extract/css'

import { textVariants } from '~/components/Text/styles.css'
import { atoms, vars } from '~/css'

export const textarea = style([
  textVariants({ variant: 'normal' }),
  atoms({
    alignItems: 'center',
    background: 'transparent',
    color: 'text100',
    borderRadius: 'md',
    border: 'none',
    outline: 'none',
    width: 'full',
    padding: '4',
  }),
  {
    resize: 'none',
    cursor: 'text',
    boxShadow: `0 0 0 ${vars.borderWidths.thin} ${vars.colors.borderNormal} inset`,

    selectors: {
      '&:disabled, &:disabled:hover': {
        cursor: 'default',
        opacity: 0.5,
      },

      '&:focus': {
        opacity: '1 !important',
        // outlineColor: vars.colors.borderFocus,
        // outlineStyle: 'solid',
        // outlineOffset: `calc(${vars.borderWidths.thick} * -1)`,
        // outlineWidth: vars.borderWidths.thick,
        boxShadow: `0 0 0 ${vars.borderWidths.thick} ${vars.colors.borderFocus} inset`,
        borderColor: 'transparent',
      },
    },
  },
])

export const resize = style({
  resize: 'vertical',
})
