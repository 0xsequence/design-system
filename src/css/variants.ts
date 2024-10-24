/**
 * boxVariants are variants that convert between the old vanilla-extract
 * atomic sprinkle properties and values to tailwind classes
 */

import { cva } from 'class-variance-authority'

import { vars } from './vars.css'

type Side = 't' | 'r' | 'b' | 'l'
type Corner = 'tl' | 'tr' | 'bl' | 'br'

const borderStyles = (side?: Side) => {
  const borderStyle = (value: 'solid' | 'dashed' | 'dotted', side?: Side) => {
    let className = 'border'

    if (side) {
      className += `-${side}`
    }

    return `${className}-${value}`
  }

  return {
    solid: borderStyle('solid', side),
    dashed: borderStyle('dashed', side),
    dotted: borderStyle('dotted', side),
  }
}

const borderWidths = (side?: Side) => {
  const borderWidth = (value: number, side?: Side) => {
    let className = 'border'

    if (value === 1) {
      return className
    }

    if (side) {
      className += `-${side}`
    }

    return `${className}-${value}`
  }

  return {
    none: borderWidth(0, side),
    thin: borderWidth(1, side),
    thick: borderWidth(2, side),
  }
}

const borderRadius = (side?: Side | Corner) => {
  const radii = {
    none: 'none',
    xs: '', // 4px
    sm: 'lg', // 8px
    md: 'xl', // 12px
    lg: '2xl', // 16px
    circle: 'full', // 9999px
  }

  const radiiValue = (value: keyof typeof radii) => {
    let className = 'rounded'

    if (side) {
      className += `-${side}`
    }

    if (radii[value]) {
      className += `-${radii[value]}`
    }

    return className
  }

  return {
    none: radiiValue('none'),
    xs: radiiValue('xs'),
    sm: radiiValue('sm'),
    md: radiiValue('md'),
    lg: radiiValue('lg'),
    circle: radiiValue('circle'),
  }
}

const margins = (side?: Side | 'x' | 'y') => {
  const margin = (value: number | string, side?: Side | 'x' | 'y') => {
    let className = 'm'

    if (side) {
      className += `${side}`
    }

    return `${className}-${value}`
  }

  return Object.entries(vars.space).reduce<{ [key: string]: string }>(
    (acc, [key, value]) => {
      acc[key] = margin(value, side)

      return acc
    },
    {}
  )
}

const paddings = (side?: Side | 'x' | 'y') => {
  const padding = (value: number | string, side?: Side | 'x' | 'y') => {
    let className = 'p'

    if (side) {
      className += `${side}`
    }

    return `${className}-${value}`
  }

  return Object.entries(vars.space).reduce<{ [key: string]: string }>(
    (acc, [key, value]) => {
      acc[key] = padding(value, side)

      return acc
    },
    {}
  )
}

const insets = () => {
  return Object.entries(vars.space).reduce<{ [key: string]: string }>(
    (acc, [key, value]) => {
      acc[key] = `inset-${value}`

      return acc
    },
    {}
  )
}

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

export const boxVariants = cva(undefined, {
  variants: {
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

    padding: paddings(),
    paddingTop: paddings('t'),
    paddingBottom: paddings('b'),
    paddingLeft: paddings('l'),
    paddingRight: paddings('r'),
    paddingX: paddings('x'),
    paddingY: paddings('y'),

    margin: margins(),
    marginTop: margins('t'),
    marginBottom: margins('b'),
    marginLeft: margins('l'),
    marginRight: margins('r'),
    marginX: margins('x'),
    marginY: margins('y'),
    gap: vars.space,

    border: {
      none: 'border-none',
    },
    borderWidth: borderWidths(),
    borderBottomWidth: borderWidths('b'),
    borderLeftWidth: borderWidths('l'),
    borderRightWidth: borderWidths('r'),
    borderTopWidth: borderWidths('t'),

    borderStyle: borderStyles(),
    borderBottomStyle: borderStyles('b'),
    borderLeftStyle: borderStyles('l'),
    borderRightStyle: borderStyles('r'),
    borderTopStyle: borderStyles('t'),

    borderRadius: borderRadius(),
    borderLeftRadius: borderRadius('l'),
    borderRightRadius: borderRadius('r'),
    borderBottomRadius: borderRadius('b'),
    borderTopRadius: borderRadius('t'),
    borderBottomLeftRadius: borderRadius('bl'),
    borderBottomRightRadius: borderRadius('br'),
    borderTopLeftRadius: borderRadius('tl'),
    borderTopRightRadius: borderRadius('tr'),

    // typography
    fontSize: vars.fontSizes,
    fontWeight: vars.fontWeights,
    letterSpacing: vars.letterSpacings,
    lineHeight: vars.lineHeights,

    textAlign: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },

    display: {
      block: 'block',
      flex: 'flex',
      grid: 'grid',
      'inline-block': 'inline-block',
      'inline-flex': 'inline-flex',
      none: 'none',
      contents: 'contents',
    },

    position: {
      absolute: 'absolute',
      fixed: 'fixed',
      relative: 'relative',
      sticky: 'sticky',
    },

    flexDirection: {
      column: 'flex-col',
      'column-reverse': 'flex-col-reverse',
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
    },

    flexShrink: {
      '0': 'flex-shrink-0',
      '1': 'flex-shrink',
    },

    flexGrow: {
      '0': 'flex-grow-0',
      '1': 'flex-grow',
    },

    flexWrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },

    justifyContent: {
      'flex-start': 'justify-start',
      'flex-end': 'justify-end',
      center: 'justify-center',
      'space-around': 'justify-around',
      'space-between': 'justify-between',
      'space-evenly': 'justify-evenly',
    },

    justifySelf: {
      auto: 'justify-self-auto',
      'flex-start': 'justify-self-start',
      'flex-end': 'justify-self-end',
      center: 'justify-self-center',
      stretch: 'justify-self-stretch',
    },

    alignItems: {
      auto: 'items-auto',
      'flex-start': 'items-start',
      'flex-end': 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },

    alignSelf: {
      auto: 'self-auto',
      'flex-start': 'self-start',
      'flex-end': 'self-end',
      center: 'self-center',
      stretch: 'self-stretch',
      baseline: 'self-baseline',
    },

    overflow: {
      auto: 'overflow-auto',
      hidden: 'overflow-hidden',
      scroll: 'overflow-scroll',
      visible: 'overflow-visible',
    },

    overflowX: {
      auto: 'overflow-x-auto',
      hidden: 'overflow-x-hidden',
      scroll: 'overflow-x-scroll',
      visible: 'overflow-x-visible',
    },

    overflowY: {
      auto: 'overflow-y-auto',
      hidden: 'overflow-y-hidden',
      scroll: 'overflow-y-scroll',
      visible: 'overflow-y-visible',
    },

    visibility: {
      hidden: 'invisible',
      visible: 'visible',
    },

    placeItems: {
      center: 'place-items-center',
      start: 'place-items-start',
      end: 'place-items-end',
      stretch: 'place-items-stretch',
    },

    inset: insets(),

    textOverflow: {
      ellipsis: 'overflow-ellipsis',
      clip: 'overflow-clip',
    },

    textDecoration: {
      none: 'no-underline',
      underline: 'underline',
    },

    textTransform: {
      capitalize: 'capitalize',
      lowercase: 'lowercase',
      uppercase: 'uppercase',
    },

    userSelect: {
      none: 'select-none',
      text: 'select-text',
      all: 'select-all',
      auto: 'select-auto',
    },

    whiteSpace: {
      normal: 'whitespace-normal',
      nowrap: 'whitespace-nowrap',
      initial: 'whitespace-initial',
      inherit: 'whitespace-inherit',
    },

    wordBreak: {
      break: 'break-all',
    },

    wordWrap: {
      break: 'break-word',
      normal: 'word-wrap-normal',
      initial: 'word-wrap-initial',
      inherit: 'word-wrap-inherit',
    },

    zIndex: vars.zIndex,

    aspectRatio: {
      '1/1': 'aspect-square',
      '16/9': 'aspect-video',
      '4/3': 'aspect-[4/3]',
      '3/1': 'aspect-[3/1]',
      auto: 'aspect-auto',
    },

    color: vars.colors,
    background: vars.colors,

    borderColor: vars.colors,
    borderBottomColor: vars.colors,
    borderLeftColor: vars.colors,
    borderRightColor: vars.colors,
    borderTopColor: vars.colors,

    outline: {
      none: 'outline-none',
    },

    boxShadow: {
      none: 'shadow-none',
    },

    backdropFilter: {
      blur: 'backdrop-filter',
      none: 'backdrop-filter-none',
    },

    cursor: {
      default: 'cursor-default',
      pointer: 'cursor-pointer',
      text: 'cursor-text',
    },
  },
})
