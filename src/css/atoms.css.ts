import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

import { breakpoints } from './breakpoints'
import { vars } from './vars.css'

const borderStyles = ['solid', 'dashed', 'dotted'] as const

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const

export const dimension = {
  none: '0',
  px: '1px',
  auto: 'auto',
  full: '100%',
  half: '50%',
  third: '33.33333%',
  quarter: '25%',
  fit: 'fit-content',
  max: 'max-content',
  min: 'min-content',
  vw: '100vw',
  vh: '100vh',
}

const responsiveProperties = defineProperties({
  conditions: {
    sm: {},
    md: { '@media': `(min-width: ${breakpoints.md}px)` },
    lg: { '@media': `(min-width: ${breakpoints.lg}px)` },
    xl: { '@media': `(min-width: ${breakpoints.xl}px)` },
  },
  defaultCondition: 'sm',
  properties: {
    width: dimension,
    height: dimension,
    maxWidth: dimension,
    maxHeight: dimension,
    minWidth: dimension,
    minHeight: dimension,

    // space
    top: vars.space,
    bottom: vars.space,
    left: vars.space,
    right: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    gap: vars.space,

    borderBottomWidth: vars.borderWidths,
    borderLeftWidth: vars.borderWidths,
    borderRightWidth: vars.borderWidths,
    borderTopWidth: vars.borderWidths,
    borderBottomLeftRadius: vars.radii,
    borderBottomRightRadius: vars.radii,
    borderTopLeftRadius: vars.radii,
    borderTopRightRadius: vars.radii,

    // typography
    fontSize: vars.fontSizes,
    fontWeight: vars.fontWeights,
    letterSpacing: vars.letterSpacings,
    lineHeight: vars.lineHeights,

    textAlign: ['center', 'left', 'right'],

    display: [
      'block',
      'flex',
      'grid',
      'inline-block',
      'inline-flex',
      'none',
      'contents',
    ],
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    flexDirection: ['column', 'column-reverse', 'row', 'row-reverse'],
    justifyContent: [...flexAlignment, 'space-around', 'space-between'],
    justifySelf: flexAlignment,
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    overflowX: ['auto', 'hidden', 'scroll'],
    overflowY: ['auto', 'hidden', 'scroll'],
  },
  shorthands: {
    borderWidth: [
      'borderBottomWidth',
      'borderLeftWidth',
      'borderRightWidth',
      'borderTopWidth',
    ],
    borderRadius: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    overflow: ['overflowX', 'overflowY'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

const unresponsiveProperties = defineProperties({
  properties: {
    backdropFilter: vars.blur,
    fontFamily: vars.fonts,
    textOverflow: ['ellipsis', 'clip'],
    textTransform: ['capitalize', 'lowercase', 'uppercase'],
    userSelect: ['none'],
    visibility: ['hidden', 'visible'],
    whiteSpace: ['normal', 'nowrap', 'initial', 'inherit'],
    wordBreak: ['break-word'],
    wordWrap: ['normal', 'break-word', 'initial', 'inherit'],
    zIndex: { '0': 0, '10': 10, '20': 20, auto: 'auto' },
  },
})

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: '&:active' },
    disabled: { selector: '&:disabled,&[data-disabled]' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover:not([disabled])' },
    checked: { selector: '&[data-state="checked"]' },
  },
  defaultCondition: 'base',
  properties: {
    background: vars.colors,
    borderBottomStyle: borderStyles,
    borderColor: vars.colors,
    borderLeftStyle: borderStyles,
    borderRightStyle: borderStyles,
    borderTopStyle: borderStyles,
    color: vars.colors,
    cursor: ['default', 'pointer', 'not-allowed'],
    opacity: vars.opacity,
    outline: ['none'],
    pointerEvents: ['none', 'auto'],
  },
  shorthands: {
    borderStyle: [
      'borderTopStyle',
      'borderRightStyle',
      'borderBottomStyle',
      'borderLeftStyle',
    ],
  },
})

export const atoms = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  selectorProperties
)

export type Atoms = Parameters<typeof atoms>[0]
