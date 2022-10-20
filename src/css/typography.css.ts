import { styleVariants } from '@vanilla-extract/css'
import { vars } from './vars.css'

export const typography = styleVariants({
  h1: {
    fontFamily: vars.fonts.heading,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.medium,
    fontSize: vars.fontSizes.lg,
    lineHeight: vars.lineHeights.heading,
    letterSpacing: vars.letterSpacings.heading
  },
  h2: {
    fontFamily: vars.fonts.heading,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.medium,
    fontSize: '14px',
    lineHeight: vars.lineHeights.heading,
    letterSpacing: vars.letterSpacings.heading
  },
  h3: {
    fontFamily: vars.fonts.heading,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.semiBold,
    fontSize: vars.fontSizes.xl,
    lineHeight: vars.lineHeights.heading,
    letterSpacing: vars.letterSpacings.heading
  },
  b1: {
    fontFamily: vars.fonts.body,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.bold,
    fontSize: vars.fontSizes.md,
    lineHeight: vars.lineHeights.body,
    letterSpacing: vars.letterSpacings.body
  },
  b2: {
    fontFamily: vars.fonts.body,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.semiBold,
    fontSize: vars.fontSizes.sm,
    lineHeight: vars.lineHeights.body,
    letterSpacing: vars.letterSpacings.body
  },
  b3: {
    fontFamily: vars.fonts.body,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.normal,
    fontSize: vars.fontSizes.sm,
    lineHeight: vars.lineHeights.body,
    letterSpacing: vars.letterSpacings.body
  },
  b4: {
    fontFamily: vars.fonts.body,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.semiBold,
    fontSize: vars.fontSizes.xs,
    lineHeight: vars.lineHeights.body,
    letterSpacing: vars.letterSpacings.body
  },
  button: {
    fontFamily: vars.fonts.heading,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.medium,
    fontSize: '14px',
    lineHeight: vars.lineHeights.heading,
    letterSpacing: vars.letterSpacings.heading
  },
  buttonSmall: {
    fontFamily: vars.fonts.body,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.normal,
    fontSize: vars.fontSizes.xs,
    lineHeight: vars.lineHeights.body,
    letterSpacing: vars.letterSpacings.body
  },
  balance: {
    fontFamily: vars.fonts.heading,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.medium,
    fontSize: vars.fontSizes.xxl,
    lineHeight: vars.lineHeights.heading,
    letterSpacing: '0.03em'
  },
  amount: {
    fontFamily: vars.fonts.heading,
    fontStyle: 'normal',
    fontWeight: vars.fontWeights.medium,
    fontSize: '25px',
    lineHeight: vars.lineHeights.heading,
    letterSpacing: '0.03em'
  },
  code: {
    fontFamily: vars.fonts.mono,
    fontSttyle: 'normal',
    fontWeight: vars.fontWeights.normal,
    fontSize: vars.fontSizes.sm,
    lineHeight: vars.lineHeights.body,
    letterSpacing: vars.letterSpacings.body
  }
})
