import { style } from '@vanilla-extract/css'

import { textVariants } from '~/components/Text/styles.css'
import { atoms } from '~/css'

export const triggerStyle = style([
  textVariants({ variant: 'normal' }),
  atoms({
    alignItems: 'center',
    background: 'transparent',
    borderColor: 'borderNormal',
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 'thin',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'medium',
    gap: '1',
    justifyContent: 'space-between',
    opacity: {
      base: '100',
      hover: '80',
    },
    padding: '4',
    userSelect: 'none',
  }),
  {
    height: 52,
    selectors: {
      '&[data-placeholder]:not(:focus)': { opacity: 0.8 },
    },
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
    cursor: {
      base: 'pointer',
      disabled: 'not-allowed',
    },
    paddingX: '4',
    paddingY: '3',
    outline: {
      focus: 'none',
      hover: 'none',
    },
    color: 'text100',
    background: {
      focus: 'backgroundSecondary',
      hover: 'backgroundSecondary',
      checked: 'backgroundControl',
    },
    opacity: {
      base: '100',
      disabled: '50',
    },
  }),
])
