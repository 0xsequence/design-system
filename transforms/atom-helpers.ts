import { isTruthy, kebabize } from '../src/utils'

// type TextVariant = 'ellipsis' | 'capitalize' | 'lowercase' | 'uppercase'

const FLEX_PROPS = [
  'alignItems',
  'alignSelf',
  'flexDirection',
  'gap',
  'justifyContent',
  'justifySelf',
  'placeItems',
]

type Side = 't' | 'b' | 'l' | 'r'
type Corner = 'tl' | 'tr' | 'bl' | 'br'

const borderRadius =
  (side?: Side | Corner) =>
  (value: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'circle') => {
    const radii = {
      none: 'none',
      xs: 'sm', // 4px
      sm: 'lg', // 8px
      md: 'xl', // 12px
      lg: '2xl', // 16px
      circle: 'full', // 9999px
    }

    const radiiValue = radii[value]

    return `rounded${side ? `-${side}` : ''}${
      radiiValue ? `-${radiiValue}` : ''
    }`
  }

const borderWidth = (side?: Side) => (value: 'none' | 'thin' | 'thick') => {
  const widths = {
    none: '0',
    thin: '1', // '0.075rem', no suffix for 1px border in tailwind
    thick: '2', // '0.125rem',
  }

  const widthValue = widths[value]

  return `border${side ? `-${side}` : ''}${widthValue ? `-${widthValue}` : ''}`
}

const borderColor = (side?: Side) => (value: 'normal' | 'focus') => {
  const colors = {
    normal: 'normal',
    focus: 'focus',
  }

  const colorValue = colors[value]

  return `border${side ? `-${side}` : ''}${colorValue ? `-${colorValue}` : ''}`
}

const width = (prefix: string) => (value: any) => {
  switch (value) {
    case 'vw':
      return `${prefix}-screen`
  }

  return `${prefix}-${value}`
}

const height = (prefix: string) => (value: any) => {
  switch (value) {
    case 'vh':
      return `${prefix}-screen`
  }

  return `${prefix}-${value}`
}

const atomMap = {
  position: '', // Empty string means just pass the value prefixless
  margin: 'm',
  marginTop: 'mt',
  marginBottom: 'mb',
  marginLeft: 'ml',
  marginRight: 'mr',
  marginX: 'mx',
  marginY: 'my',

  padding: 'p',
  paddingTop: 'pt',
  paddingBottom: 'pb',
  paddingLeft: 'pl',
  paddingRight: 'pr',
  paddingX: 'px',
  paddingY: 'py',

  width: width('w'),
  minWidth: width('min-w'),
  maxWidth: width('max-w'),

  height: height('h'),
  minHeight: height('min-h'),
  maxHeight: height('max-h'),

  gap: 'gap',

  whiteSpace: 'whitespace',

  wordWrap: 'break',
  wordBreak: 'break',

  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',

  inset: 'inset',

  overflow: 'overflow',
  overflowX: 'overflow-x',
  overflowY: 'overflow-y',

  zIndex: 'z',

  userSelect: 'select',

  cursor: 'cursor',

  fontFamily: 'font',

  textTransform: '', // No prefix - pass through value as utility class

  opacity: 'opacity',

  pointerEvents: 'pointer-events',

  focusRing: 'shadow', // focusRing is only used for disabling a box shadow with none
  boxShadow: 'shadow',
  outline: 'outline', // Not used

  // Text variants: Boolean short hands for applying specific text styles
  ellipsis: 'truncate',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  lowercase: 'lowercase',

  borderRadius: borderRadius(),
  borderTopRadius: borderRadius('t'),
  borderBottomRadius: borderRadius('b'),
  borderLeftRadius: borderRadius('l'),
  borderRightRadius: borderRadius('r'),
  borderTopLeftRadius: borderRadius('tl'),
  borderTopRightRadius: borderRadius('tr'),
  borderBottomLeftRadius: borderRadius('bl'),
  borderBottomRightRadius: borderRadius('br'),

  borderWidth: borderWidth(),
  borderTopWidth: borderWidth('t'),
  borderBottomWidth: borderWidth('b'),
  borderLeftWidth: borderWidth('l'),
  borderRightWidth: borderWidth('r'),

  borderColor: borderColor(),
  borderTopColor: borderColor('t'),
  borderBottomColor: borderColor('b'),
  borderLeftColor: borderColor('l'),
  borderRightColor: borderColor('r'),

  border: (value: 'none') => {
    switch (value) {
      case 'none':
        return 'border-none'
    }

    return null
  },

  // tailwind only supports a single border style at a time so we can't specify a side here - just map all to border
  borderStyle: 'border',
  borderTopStyle: 'border',
  borderBottomStyle: 'border',
  borderLeftStyle: 'border',
  borderRightStyle: 'border',

  aspectRatio: (value: 'auto' | '1/1' | '16/9' | '4/3' | '3/1') => {
    switch (value) {
      case 'auto':
        return 'aspect-auto'
      case '1/1':
        return 'aspect-square'
      case '16/9':
        return 'aspect-video'
      case '4/3':
        return 'aspect-[4 / 3]'
      case '3/1':
        return 'aspect-[3 / 1]'
    }

    return null
  },

  alignSelf: (
    value:
      | 'auto'
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'stretch'
      | 'baseline'
  ) => {
    switch (value) {
      case 'auto':
        return 'self-auto'
      case 'flex-start':
        return 'self-start'
      case 'flex-end':
        return 'self-end'
      case 'center':
        return 'self-center'

      case 'stretch':
        return 'self-stretch'
      case 'baseline':
        return 'self-baseline'
    }

    return null
  },

  textDecoration: (value: 'none' | 'underline') => {
    switch (value) {
      case 'none':
        return 'no-underline'
      case 'underline':
        return 'underline'
    }

    return null
  },

  textOverflow: (value: 'ellipsis' | 'clip') => {
    switch (value) {
      case 'ellipsis':
        return 'ellipsis'
      case 'clip':
        return 'overflow-clip'
    }

    return null
  },

  fontSize: (
    value:
      | 'inherit'
      | 'xsmall'
      | 'small'
      | 'normal'
      | 'medium'
      | 'large'
      | 'xlarge'
  ) => {
    switch (value) {
      case 'inherit':
        return 'text-[inherit]'
      case 'xsmall':
        return 'text-xs'
      case 'small':
        return 'text-sm'
      case 'normal':
        return 'text-base'
      case 'medium':
        return 'text-large'
      case 'large':
        return 'text-xl'
      case 'xlarge':
        return 'text-2xl'
    }

    return null
  },

  fontWeight: (
    value: 'inherit' | 'normal' | 'medium' | 'semibold' | 'bold'
  ) => {
    switch (value) {
      case 'inherit':
        return 'font-[inherit]'
      case 'normal':
        return 'font-normal'
      case 'medium':
        return 'font-medium'
      case 'semibold':
        return 'font-semibold'
      case 'bold':
        return 'font-bold'
    }

    return null
  },

  letterSpacing: (value: 'inherit' | 'none' | 'normal' | 'wide') => {
    switch (value) {
      case 'inherit':
        return 'tracking-[inherit]'
      case 'none':
        return 'tracking-normal'
      case 'normal':
        return 'tracking-wide'
      case 'wide':
        return 'tracking-wider'
    }

    return null
  },

  lineHeight: (value: 'inherit' | '4' | '5' | '6' | '7' | '9') => {
    switch (value) {
      case 'inherit':
        return 'leading-[inherit]'
      case '4':
        return 'leading-4'
      case '5':
        return 'leading-5'
      case '6':
        return 'leading-6'
      case '7':
        return 'leading-7'
      case '9':
        return 'leading-9'
    }

    return null
  },

  color: (value: string) => `text-${kebabize(value)}`,
  background: (value: string) => `bg-${kebabize(value)}`,

  placeItems: (value: 'center' | 'start' | 'end' | 'stretch') => {
    switch (value) {
      case 'center':
        return 'place-items-center'
      case 'start':
        return 'place-items-start'
      case 'end':
        return 'place-items-end'
      case 'stretch':
        return 'place-items-stretch'
    }

    return null
  },

  alignItems: (
    value: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  ) => {
    switch (value) {
      case 'flex-start':
        return 'items-start'
      case 'flex-end':
        return 'items-end'
      case 'center':
        return 'items-center'
      case 'baseline':
        return 'items-baseline'
      case 'stretch':
        return 'items-stretch'
    }

    return null
  },

  justifyContent: (
    value:
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
  ) => {
    switch (value) {
      case 'flex-start':
        return 'justify-start'
      case 'flex-end':
        return 'justify-end'
      case 'center':
        return 'justify-center'
      case 'space-between':
        return 'justify-between'
      case 'space-around':
        return 'justify-around'
      case 'space-evenly':
        return 'justify-evenly'
    }

    return null
  },

  justifySelf: (
    value: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch'
  ) => {
    switch (value) {
      case 'auto':
        return 'justify-self-auto'
      case 'flex-start':
        return 'justify-self-start'
      case 'flex-end':
        return 'justify-self-end'
      case 'center':
        return 'justify-self-center'
      case 'stretch':
        return 'justify-self-stretch'
    }

    return null
  },

  backdropFilter: (value: 'none' | 'blur') => {
    switch (value) {
      case 'none':
        return 'backdrop-filter-none'
      case 'blur':
        return 'backdrop-filter'
    }

    return null
  },

  flexDirection: (
    value: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  ) => {
    switch (value) {
      case 'column':
        return 'flex-col'
      case 'column-reverse':
        return 'flex-col-reverse'
      case 'row':
        return 'flex-row'
      case 'row-reverse':
        return 'flex-row-reverse'
    }

    return null
  },

  flexShrink: (value: '0' | '1') => {
    switch (value) {
      case '0':
        return 'shrink-0'
      case '1':
        return 'shrink'
    }

    return null
  },

  flexGrow: (value: '0' | '1') => {
    switch (value) {
      case '0':
        return 'grow-0'
      case '1':
        return 'grow'
    }

    return null
  },

  flexWrap: (value: 'wrap' | 'nowrap' | 'wrap-reverse') => `flex-${value}`,

  visibility: (value: 'hidden' | 'visible') => {
    switch (value) {
      case 'hidden':
        return 'invisible'
      case 'visible':
        return 'visible'
    }

    return null
  },

  textAlign: (value: 'left' | 'right' | 'center' | 'justify') =>
    `text-${value}`,

  display: (
    value:
      | 'none'
      | 'block'
      | 'inline'
      | 'inline-block'
      | 'flex'
      | 'inline-flex'
      | 'grid'
      | 'contents'
  ) => {
    switch (value) {
      case 'none':
        return 'hidden'
      case 'block':
        return 'block'
      case 'inline':
        return 'inline'
      case 'inline-block':
        return 'inline-block'
      case 'flex':
        return 'flex'
      case 'inline-flex':
        return 'inline-flex'
      case 'grid':
        return 'grid'
      case 'contents':
        return 'contents'
    }

    return null
  },
}

export type AtomKey = keyof typeof atomMap

export const ATOM_KEYS = Object.keys(atomMap) as AtomKey[]

export const getTailwindClassName = (
  key: AtomKey,
  value?: string
): string | null => {
  const mapping = atomMap[key] as any

  // Empty string means no prefix - just pass the value as the classname
  if (mapping === '') {
    return value ? value : null
  }

  if (!mapping) {
    return null
  }

  if (typeof mapping === 'function') {
    return mapping(value ? value : '')
  } else {
    return [mapping, value].filter(isTruthy).join('-')
  }
}

export const hasAtomProps = (props: Record<string, string>) => {
  return Object.keys(props).some(key => ATOM_KEYS.includes(key as any))
}

export const getAtomProps = (props: Record<string, string>) => {
  const atomEntries = Object.entries(props).filter(([key]) =>
    ATOM_KEYS.includes(key as any)
  )

  // If any flex props are present we need to ensure that display: flex is set if it is missing
  if (
    atomEntries.some(([key]) => key !== 'display' && FLEX_PROPS.includes(key))
  ) {
    atomEntries.unshift(['display', 'flex'])
  }

  return Object.fromEntries(atomEntries)
}
