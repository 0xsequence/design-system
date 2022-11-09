import { globalStyle } from '@vanilla-extract/css'

import { vars } from './vars.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('*:focus', {
  outlineColor: vars.colors.borderFocus,
  outlineStyle: 'solid',
  outlineOffset: `calc(${vars.borderWidths.thick} * -1)`,
  outlineWidth: vars.borderWidths.thick,
  borderColor: 'transparent',
})
