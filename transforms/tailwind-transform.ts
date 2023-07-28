import { JSXAttribute, Transform } from 'jscodeshift'
// import * as prettier from 'prettier'

const MAPPING = {
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

  whiteSpace: 'whitespace',
}

const ATTRIBUTES = Object.keys(MAPPING)

const transform: Transform = (file, api) => {
  const j = api.jscodeshift

  const root = j(file.source)

  let isMutated = false

  root
    .findJSXElements('Field')
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

      let classNameAttr: JSXAttribute = node.openingElement.attributes.find(
        attribute =>
          attribute.type === 'JSXAttribute' &&
          attribute.name.name === 'className'
      ) as JSXAttribute

      if (!classNameAttr) {
        classNameAttr = j.jsxAttribute(j.jsxIdentifier('className'))
        node.openingElement.attributes.push(classNameAttr)
      }

      const attrs = node.openingElement.attributes.filter(
        attribute =>
          attribute.type === 'JSXAttribute' &&
          attribute.name.type === 'JSXIdentifier' &&
          ATTRIBUTES.includes(attribute.name.name)
      ) as JSXAttribute[]

      // attrs.forEach(attr => {
      //   ;(classNameAttr.value as any).value = ` ${
      //     MAPPING[attr.name.name as string]
      //   }-${(attr.value as any).value as string}`
      // })

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
