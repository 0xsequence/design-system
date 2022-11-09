import { style } from '@vanilla-extract/css'

import { atoms, vars } from '~/css'

import { variants as textVariants } from '../Text/styles.css'

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
    color: 'textBody',
    background: 'transparent',
    borderWidth: 'thin',
    borderRadius: 'md',
    display: 'inline-block',
    paddingY: 'tight',
    borderColor: 'borderNormal',

    fontWeight: 'regular',
    letterSpacing: 'open',
  }),
  style({
    minWidth: '100%',
    borderStyle: 'solid',

    selectors: {
      '&:focus': {
        boxShadow: `${vars.colors.backgroundPrimary} 0px 0px 0px 1px, ${vars.colors.textBody} 0px 0px 0px 4px`,
        outline: 'none',
      },
    },
  }),
])

const inputIcon = style([
  atoms({
    position: 'absolute',
    fontSize: 'small',
  }),
  style({
    top: '50%',
    transform: 'translateY(-50%)',
    height: '1.5em',
  }),
])

export const leftIcon = style([inputIcon, atoms({ left: 'normal' })])
export const rightIcon = style([inputIcon, atoms({ right: 'normal' })])
