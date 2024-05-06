import { globalStyle, style } from '@vanilla-extract/css'

import { vars } from './vars.css'

export const reset = style({
  textDecoration: 'unset',
})

globalStyle(`${reset}, ${reset} *`, {
  fontFamily: vars.fonts.body,
  fontStretch: 'unset',
  fontStyle: 'unset',
  fontVariant: 'unset',
  fontWeight: 'unset',
  background: 'unset',
  border: 'unset',
  color: 'unset',
  listStyleType: 'none',
  outline: 'unset',
  textDecoration: 'unset',
  margin: 0,
  padding: 0,
})

// Border box sizing
globalStyle(
  `${reset}, ${reset}::before, ${reset}::after, ${reset} *, ${reset} *::before, ${reset} *::after`,
  {
    boxSizing: 'border-box',
  }
)

// Disable focus outline
globalStyle(`${reset} *:focus, ${reset} *:focus-visible`, {
  outline: 'none',
})

// Custom Focus Ring
globalStyle(`${reset} *:focus-visible`, {
  outline: 'none',

  // Safari does not apply a border radius to outlines so we will use a boxShadow instead to acheive that same inset effect
  boxShadow: `0 0 0 ${vars.borderWidths.thick} ${vars.colors.borderFocus} inset`,

  // Because we use a semi transparent focus ring we want to set any border color to transparent so it doesnt show through
  borderColor: 'transparent',
})

// Custom scrollbars
globalStyle(`html:not(.is-apple) ${reset} *::-webkit-scrollbar`, {
  appearance: 'none',
  width: '13px',
  background: 'rgba(0, 0, 0, 0)',
})

globalStyle(`html:not(.is-apple) ${reset} *::-webkit-scrollbar-thumb`, {
  background: vars.colors.text50,
  border: '3px solid transparent',
  backgroundClip: 'content-box',
  borderRadius: '7px',
})
