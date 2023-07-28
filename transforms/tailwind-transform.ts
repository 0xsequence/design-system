import { JSXAttribute, Transform } from 'jscodeshift'
// import * as prettier from 'prettier'

interface SprinklesToTailwindMapping {
  [key: string]: string | ((value: string) => string)
}

const MAPPING: SprinklesToTailwindMapping = {
  margin: 'm',
  marginTop: 'mt',
  marginBottom: 'mb',
  marginX: 'mx',
  marginY: 'my',

  padding: 'p',
  paddingTop: 'pt',
  paddingBottom: 'pb',
  paddingX: 'px',
  paddingY: 'py',

  width: 'w',
  minWidth: 'min-w',
  maxWidth: 'max-w',

  height: 'h',
  minHeight: 'min-h',
  maxHeight: 'max-h',

  gap: 'gap',

  alignItems: 'items',
  justifyContent: 'justify',

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

  flexDirection: (value: string) => {
    switch (value) {
      case 'column':
        return 'flex-col'
      case 'column-reverse':
        return 'flex-col-reverse'
      case 'row':
        return 'flex-row'
      case 'row-reverse':
        return 'flex-row-reverse'
      default:
        return ''
    }
  },

  visibility: (value: string) => {
    if (value === 'hidden') {
      return 'invisible'
    }

    return 'visible'
  },

  display: (value: string) => {
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
      default:
        return ''
    }
  },
}

const ATTRIBUTES = Object.keys(MAPPING)

const transform: Transform = (file, api) => {
  const j = api.jscodeshift

  const root = j(file.source)

  let isMutated = false

  root
    .findJSXElements()
    .filter(({ node }) => {
      // Check to see if the attribute name is in the list of attributes we want to transform
      return !!node.openingElement?.attributes?.find(
        attribute =>
          attribute.type === 'JSXAttribute' &&
          attribute.name.type === 'JSXIdentifier' &&
          ATTRIBUTES.includes(attribute.name.name)
      )
    })
    .replaceWith(({ node }) => {
      isMutated = true

      if (!node.openingElement?.attributes) {
        return node
      }

      // Replace Box components with div if there is no "as" prop
      if (
        node.openingElement.name.type === 'JSXIdentifier' &&
        node.openingElement.name.name === 'Box'
      ) {
        // Check if node has an "as" prop
        const asProp = node.openingElement.attributes.find(
          attribute =>
            attribute.type === 'JSXAttribute' &&
            attribute.name.type === 'JSXIdentifier' &&
            attribute.name.name === 'as'
        ) as JSXAttribute

        if (!asProp) {
          node.openingElement.name.name = 'div'

          if (!node.openingElement.selfClosing) {
            if (node.closingElement?.name.type === 'JSXIdentifier') {
              node.closingElement.name.name = 'div'
            }
          }
        }
      }

      let classNameAttr: JSXAttribute = node.openingElement.attributes.find(
        attribute =>
          attribute.type === 'JSXAttribute' &&
          attribute.name.name === 'className'
      ) as JSXAttribute

      if (!classNameAttr) {
        classNameAttr = j.jsxAttribute(
          j.jsxIdentifier('className'),
          j.literal('')
        )
        node.openingElement.attributes.push(classNameAttr)
      }

      // Find all the attributes that we want to transform
      const attrs = node.openingElement.attributes.filter(
        attribute =>
          attribute.type === 'JSXAttribute' &&
          attribute.name.type === 'JSXIdentifier' &&
          ATTRIBUTES.includes(attribute.name.name)
      ) as JSXAttribute[]

      // Map atomic props  to tailwind classNames
      const tailwindClassNames: string = attrs
        .map(attr => {
          const name = attr.name.name as string
          const value = (attr.value as any).value || null

          if (!value) {
            return
          }

          const mapping = MAPPING[name]

          if (typeof mapping === 'function') {
            return mapping(value)
          }

          return `${mapping}-${value}`
        })
        .filter(Boolean)
        .join(' ')

      // Update the className attribute
      if (classNameAttr.value?.type === 'Literal') {
        classNameAttr.value.value =
          `${classNameAttr.value.value} ${tailwindClassNames}`.trimStart()
      } else if (classNameAttr.value?.type === 'JSXExpressionContainer') {
        // classNameAttr.value.expression = j.template
        //   .expression`${classNameAttr.value.expression} ${tailwindClassNames}`.expression
      }

      // Filter out attributes that matched
      node.openingElement.attributes = node.openingElement.attributes.filter(
        attr =>
          attr.type !== 'JSXAttribute' ||
          !ATTRIBUTES.includes(attr.name.name as string)
      )

      return node
    })

  if (isMutated) {
    return root.toSource()
  }

  return null
}

export default transform
