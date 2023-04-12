import { globalStyle } from '@vanilla-extract/css'

import { vars } from './vars.css'

globalStyle('*', {
  background: 'unset',
  border: 'unset',
  color: 'unset',
  fontFamily: vars.fonts.body,
  fontStretch: 'unset',
  fontStyle: 'unset',
  fontVariant: 'unset',
  fontWeight: 'unset',
  listStyleType: 'none',
  margin: 0,
  outline: 'unset',
  padding: 0,
  textDecoration: 'unset',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('*:focus', {
  outline: 'none',
})

globalStyle('*:focus-visible', {
  // outlineColor: `${vars.colors.borderFocus} !important`,
  // outlineStyle: 'solid',
  // outlineOffset: `calc(${vars.borderWidths.thick} * -1)`,
  // outlineWidth: vars.borderWidths.thick,

  // Safari does not apply a border radius to outlines so we will use a boxShadow instead to acheive that same inset effect
  boxShadow: `0 0 0 ${vars.borderWidths.thick} ${vars.colors.borderFocus} inset`,

  // Because we use a semi transparent focus ring we want to set any border color to transparent so it doesnt show through
  borderColor: 'transparent',
})

globalStyle('body', {
  background: vars.colors.backgroundPrimary,
  color: vars.colors.text80,
})
