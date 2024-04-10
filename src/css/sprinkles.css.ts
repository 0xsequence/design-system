import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

import { breakpoints } from './breakpoints'
import { vars } from './vars.css'

const borderStyles = ['solid', 'dashed', 'dotted'] as const

const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const

const extraSpace = {
  none: '0',
  px: '1px',
  auto: 'auto',
  full: '100%',
  '1/2': '50%',
  '1/3': '33.33333%',
  '2/3': '66.66667%',
  '1/4': '25%',
  '3/4': '75%',
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
    width: { ...vars.space, ...extraSpace },
    height: { ...vars.space, ...extraSpace },
    maxWidth: { ...vars.space, ...extraSpace },
    maxHeight: { ...vars.space, ...extraSpace },
    minWidth: { ...vars.space, ...extraSpace },
    minHeight: { ...vars.space, ...extraSpace },

    // space
    top: { ...vars.space, auto: 'auto' },
    bottom: { ...vars.space, auto: 'auto' },
    left: { ...vars.space, auto: 'auto' },
    right: { ...vars.space, auto: 'auto' },
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: { ...vars.space, auto: 'auto' },
    marginBottom: { ...vars.space, auto: 'auto' },
    marginLeft: { ...vars.space, auto: 'auto' },
    marginRight: { ...vars.space, auto: 'auto' },
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
    flexShrink: ['0', '1'],
    flexGrow: ['0', '1'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    justifyContent: [
      ...flexAlignment,
      'space-around',
      'space-between',
      'space-evenly',
    ],
    justifySelf: flexAlignment,
    alignItems: [...flexAlignment, 'baseline'],
    alignSelf: [...flexAlignment, 'baseline'],
    overflowX: ['auto', 'hidden', 'scroll', 'visible'],
    overflowY: ['auto', 'hidden', 'scroll', 'visible'],
    visibility: ['hidden', 'visible'],
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
    inset: ['top', 'bottom', 'left', 'right'],
  },
})

const unresponsiveProperties = defineProperties({
  properties: {
    backdropFilter: vars.blur,
    fontFamily: vars.fonts,
    textOverflow: ['ellipsis', 'clip'],
    textTransform: ['capitalize', 'lowercase', 'uppercase'],
    textDecoration: ['none', 'underline'],
    userSelect: ['none', 'text', 'all', 'auto'],
    whiteSpace: ['normal', 'nowrap', 'initial', 'inherit'],
    wordBreak: ['break-word'],
    wordWrap: ['normal', 'break-word', 'initial', 'inherit'],
    zIndex: {
      '-1': -1,
      '0': 0,
      '1': 1,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      auto: 'auto',
    },
    aspectRatio: {
      '1/1': '1 / 1',
      '16/9': '16 / 9',
      '4/3': '4 / 3',
      '3/1': '3 / 1',
      auto: 'auto',
    },
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
    borderBottomColor: vars.colors,
    borderBottomStyle: borderStyles,
    borderLeftColor: vars.colors,
    borderLeftStyle: borderStyles,
    borderRightColor: vars.colors,
    borderRightStyle: borderStyles,
    borderTopColor: vars.colors,
    borderTopStyle: borderStyles,
    border: ['none'],
    color: vars.colors,
    cursor: ['default', 'pointer', 'text'],
    opacity: vars.opacity,
    pointerEvents: ['none', 'auto'],
    outline: ['none'], // focusRing
    boxShadow: ['none'], // focusRing
  },
  shorthands: {
    borderColor: [
      'borderTopColor',
      'borderRightColor',
      'borderBottomColor',
      'borderLeftColor',
    ],
    borderStyle: [
      'borderTopStyle',
      'borderRightStyle',
      'borderBottomStyle',
      'borderLeftStyle',
    ],
    focusRing: ['boxShadow', 'outline'],
  },
})

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  selectorProperties
)
