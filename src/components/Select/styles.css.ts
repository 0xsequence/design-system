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
  { height: 52 },
])

export const contentStyle = style([
  atoms({
    backdropFilter: 'blur',
    background: 'buttonGlass',
    borderColor: 'borderNormal',
    borderRadius: 'sm',
    borderStyle: 'solid',
    borderWidth: 'thin',
    color: 'textBody',
    overflow: 'hidden',
  }),
])

export const groupLabelStyle = style([
  atoms({
    display: 'flex',
    justifyContent: 'space-between',
    paddingX: '4',
    paddingY: '3',
    color: 'textFaded',
  }),
])

export const optionStyle = style([
  atoms({
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    paddingX: '4',
    paddingY: '3',
    outline: {
      focus: 'none',
      hover: 'none',
    },
    background: {
      focus: 'backgroundSecondary',
      hover: 'backgroundSecondary',
      checked: 'backgroundControl',
    },
  }),
])
