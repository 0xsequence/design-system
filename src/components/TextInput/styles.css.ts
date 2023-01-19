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
    borderColor: 'borderNormal',
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 'thin',
    minWidth: 'full',
    paddingX: '4',
    gap: '2',
  }),
  {
    cursor: 'text',
    height: '52px',

    selectors: {
      '&:has(:disabled), &:has(:disabled):hover': {
        cursor: 'default',
        opacity: 0.5,
      },

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
