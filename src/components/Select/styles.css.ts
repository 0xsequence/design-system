import { style } from '@vanilla-extract/css'

import { textVariants } from '~/components/Text/styles.css'
import { atoms, vars } from '~/css'

export const triggerStyle = style([
  textVariants({ variant: 'normal' }),
  atoms({
    alignItems: 'center',
    background: 'transparent',
    borderColor: 'borderNormal',
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 'thin',
    display: 'inline-flex',
    fontWeight: 'medium',
    color: 'text100',
    gap: '1',
    justifyContent: 'space-between',
    opacity: {
      base: '100',
      hover: '80',
      disabled: '50',
    },
    padding: '4',
    userSelect: 'none',
    cursor: {
      base: 'pointer',
      disabled: 'default',
    },
  }),
  {
    height: 52,
  },
])

export const contentStyle = style([
  atoms({
    backdropFilter: 'blur',
    background: 'buttonGlass',
    borderColor: 'borderNormal',
    borderRadius: 'sm',
    borderStyle: 'solid',
    borderWidth: 'thin',
    color: 'text100',
    overflow: 'hidden',
    zIndex: '10',
  }),
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
    outline: {
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
