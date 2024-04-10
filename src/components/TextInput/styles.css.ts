import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { textVariants } from '~/components/Text/styles.css'
import { atoms, vars } from '~/css'

export const wrap = style([
  atoms({
    display: 'inline-flex',
    alignItems: 'center',
    background: 'transparent',
    color: 'text100',
    borderRadius: 'md',
    // borderColor: 'borderNormal',
    // borderStyle: 'solid',
    // borderWidth: 'thin',
    minWidth: 'full',
    paddingX: '4',
    gap: '2',
  }),
  {
    cursor: 'text',
    height: '52px',

    boxShadow: `0 0 0 ${vars.borderWidths.thin} ${vars.colors.borderNormal} inset`,

    selectors: {
      '&:has(:disabled), &:has(:disabled):hover': {
        cursor: 'default',
        opacity: 0.5,
      },

      '&:focus-within': {
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

export const wrapVariants = recipe({
  variants: {
    borderRadius: {
      xs: atoms({ borderRadius: 'xs' }),
      sm: atoms({ borderRadius: 'sm' }),
      md: atoms({ borderRadius: 'md' }),
    },
  },
})

export type WrapVariants = RecipeVariants<typeof wrapVariants>

export const input = recipe({
  base: atoms({
    display: 'block',
    background: 'transparent',
    border: 'none',
    paddingX: '0',
    paddingY: '4',
    width: 'full',
    height: 'full',
    focusRing: 'none',
  }),

  variants: {
    numeric: {
      false: textVariants({ variant: 'normal' }),
      true: textVariants({ variant: 'large' }),
    },
  },
})
