import { style } from '@vanilla-extract/css'

import { atoms } from '~/css'

import { textVariants } from '../Text/styles.css'

export const wrap = atoms({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  background: 'transparent',
  color: 'textBody',
})

export const input = style([
  textVariants({ variant: 'normal' }),
  atoms({
    borderColor: 'borderNormal',
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 'thin',
    color: 'textBody',
    display: 'inline-block',
    paddingY: '3',
  }),
  style({
    minWidth: '100%',
  }),
])

const inputIcon = style([
  atoms({ position: 'absolute' }),
  style({
    top: '50%',
    transform: 'translateY(-50%)',
  }),
])

export const leftIcon = style([inputIcon, atoms({ left: '4' })])
export const rightIcon = style([inputIcon, atoms({ right: '4' })])
