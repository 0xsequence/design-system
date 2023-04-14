import { style } from '@vanilla-extract/css'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { textVariants } from '~/components/Text/styles.css'
import { atoms, vars } from '~/css'

export const triggerStyle = style([
  textVariants({ variant: 'normal' }),
  atoms({
    alignItems: 'center',
    background: 'transparent',
    // borderColor: 'borderNormal',
    // borderStyle: 'solid',
    // borderWidth: 'thin',
    display: 'inline-flex',
    fontWeight: 'medium',
    color: 'text100',
    gap: '1',
    justifyContent: 'space-between',
    padding: '4',
    userSelect: 'none',
    cursor: 'pointer',
  }),
  {
    height: 52,

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

export const triggerVariants = recipe({
  variants: {
    borderRadius: {
      xs: atoms({ borderRadius: 'xs' }),
      sm: atoms({ borderRadius: 'sm' }),
      md: atoms({ borderRadius: 'md' }),
    },
  },
})

export type TriggerVariants = RecipeVariants<typeof triggerVariants>

export const contentStyle = style([
  atoms({
    backdropFilter: 'blur',
    background: 'buttonGlass',
    borderRadius: 'sm',
    // borderColor: 'borderNormal',
    // borderStyle: 'solid',
    // borderWidth: 'thin',
    color: 'text100',
    overflow: 'hidden',
    zIndex: '30',
  }),

  {
    boxShadow: `0 0 0 ${vars.borderWidths.thick} ${vars.colors.borderFocus} inset`,
  },
])

export const groupLabelStyle = style([
  atoms({
    display: 'flex',
    justifyContent: 'space-between',
    paddingX: '4',
    paddingY: '3',
    color: 'text50',
  }),
])

export const optionStyle = style([
  textVariants({ variant: 'normal' }),
  atoms({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: {
      base: 'pointer',
      disabled: 'default',
    },
    paddingX: '4',
    paddingY: '3',
    focusRing: {
      focus: 'none',
      hover: 'none',
    },
    color: 'text100',
    opacity: {
      base: '100',
      disabled: '50',
    },
  }),
  {
    height: 52,

    selectors: {
      '&[data-highlighted]': {
        background: vars.colors.backgroundSecondary,
      },
      '&[data-state="checked"]': {
        background: vars.colors.backgroundControl,
      },
    },
  },
])
