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

  outline: 'none',

  // Safari does not apply a border radius to outlines so we will use a boxShadow instead to acheive that same inset effect
  boxShadow: `0 0 0 ${vars.borderWidths.thick} ${vars.colors.borderFocus} inset`,

  // Because we use a semi transparent focus ring we want to set any border color to transparent so it doesnt show through
  borderColor: 'transparent',
})

globalStyle('body', {
  fontSize: '1rem',
})

globalStyle('html:not(.is-apple) *::-webkit-scrollbar', {
  appearance: 'none',
  width: '13px',
  background: 'rgba(0, 0, 0, 0)',
})

globalStyle('html:not(.is-apple) *::-webkit-scrollbar-thumb', {
  background: vars.colors.text50,
  border: '3px solid transparent',
  backgroundClip: 'content-box',
  borderRadius: '7px',
})
