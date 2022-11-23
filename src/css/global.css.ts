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

globalStyle('*:focus:not(:active)', {
  outlineColor: vars.colors.borderFocus,
  outlineStyle: 'solid',
  outlineOffset: `calc(${vars.borderWidths.thick} * -1)`,
  outlineWidth: vars.borderWidths.thick,
  borderColor: 'transparent',
})
