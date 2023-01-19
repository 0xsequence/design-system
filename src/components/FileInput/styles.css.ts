import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { textVariants } from '~/components/Text/styles.css'
import { atoms, vars } from '~/css'

export const wrap = style([
  textVariants({ variant: 'normal' }),
  atoms({
    alignItems: 'center',
    borderColor: 'borderNormal',
    borderStyle: 'dashed',
    borderWidth: 'thin',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    minWidth: 'full',
    padding: '4',
    position: 'relative',
  }),
  {
    height: 52,

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
  atoms({
    position: 'absolute',
    opacity: '0',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  }),
])
