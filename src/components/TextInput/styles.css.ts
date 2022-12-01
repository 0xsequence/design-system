import { style } from '@vanilla-extract/css'

import { textVariants } from '~/components/Text/styles.css'
import { atoms } from '~/css'

export const wrap = atoms({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  background: 'transparent',
  color: {
    base: 'textBody',
    disabled: 'textInactive',
  },
})

export const input = style([
  textVariants({ variant: 'normal' }),
  atoms({
    borderColor: 'borderNormal',
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 'thin',
    display: 'inline-block',
    paddingY: '4',
    opacity: {
      base: '100',
      hover: '80',
      disabled: '50',
    },
  }),
  { height: 52, minWidth: '100%' },
])

const inputIcon = style([
  atoms({ position: 'absolute' }),
  { top: '50%', transform: 'translateY(-50%)' },
])

export const leftIcon = style([inputIcon, atoms({ left: '4' })])
export const rightIcon = style([inputIcon, atoms({ right: '4' })])
