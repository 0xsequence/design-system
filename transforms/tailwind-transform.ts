import { API, FileInfo, JSXAttribute } from 'jscodeshift'
// import { resolveConfig } from 'prettier'
import * as prettierPluginBabel from 'prettier/plugins/babel'
// @ts-ignore
import * as prettierPluginEstree from 'prettier/plugins/estree'
import * as prettierPluginTypescript from 'prettier/plugins/typescript'
import { format } from 'prettier/standalone'

// const breakpoints = ['sm', 'md', 'lg', 'xl']
// const selectors = ['base', 'active', 'focus', 'disabled', 'hover', 'checked']

type LiteralValue = string | number | boolean | null | RegExp

interface SprinklesToTailwindMapping {
  [key: string]: string | ((value: LiteralValue) => string)
}

const MAPPING: SprinklesToTailwindMapping = {
  position: '', // Empty string means just pass the value prefixless
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

  ellipsis: 'truncate',

  capitalize: 'capitalize',

  uppercase: 'uppercase',

  lowercase: 'lowercase',

  alignItems: value => {
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

    return ''
  },

  justifyContent: value => {
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

    return ''
  },

  backdropFilter: value => {
    switch (value) {
      case 'none':
        return 'backdrop-filter-none'
      case 'blur':
        return 'backdrop-filter'
    }

    return ''
  },

  flexDirection: value => {
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

  visibility: value => {
    if (value === 'hidden') {
      return 'invisible'
    }

    return 'visible'
  },

  display: value => {
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

const transform = async (file: FileInfo, api: API) => {
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

      // Find all the attributes that we want to transform
      const attrs = node.openingElement.attributes.filter(
        attribute =>
          attribute.type === 'JSXAttribute' &&
          attribute.name.type === 'JSXIdentifier' &&
          ATTRIBUTES.includes(attribute.name.name)
      ) as JSXAttribute[]

      // Map atomic props  to tailwind classNames
      const tailwindClassNames: string[] = attrs
        .map(attr => {
          const name = attr.name.name as string
          const value =
            attr.value && attr.value.type === 'StringLiteral'
              ? attr.value.value
              : null

          const mapping = MAPPING[name]

          // const parseAttributeValueNode = (node: JSXAttribute['value']) => {
          //   if (node) {
          //     const { type } = node

          //     switch (type) {
          //       case 'Literal':
          //       case 'NullLiteral':
          //       case 'BooleanLiteral':
          //       case 'NumericLiteral':
          //       case 'StringLiteral':
          //         return node.value

          //       case 'JSXExpressionContainer': {
          //         const { expression } = node
          //         const { type } = expression

          //         switch (type) {
          //           case 'Literal':
          //           case 'StringLiteral':
          //             return expression.value

          //           // case 'TemplateLiteral':
          //           //   return expression.quasis

          //           // case 'ConditionalExpression':
          //         }
          //       }
          //     }
          //   }

          //   return null
          // }

          if (typeof mapping === 'function') {
            return mapping(value)
          }

          return [mapping, value].filter(Boolean).join('-')
        })
        .filter(Boolean)

      // No classnames were found
      if (!tailwindClassNames.length) {
        return node
      }

      // Check if the className attribute exists
      let classNameAttr: JSXAttribute = node.openingElement.attributes.find(
        attribute =>
          attribute.type === 'JSXAttribute' &&
          attribute.name.name === 'className'
      ) as JSXAttribute

      // If it doesn't exist, create it
      if (!classNameAttr) {
        classNameAttr = j.jsxAttribute(
          j.jsxIdentifier('className'),
          j.stringLiteral('')
        )
        node.openingElement.attributes.push(classNameAttr)
      }

      // Update the className attribute
      if (classNameAttr.value?.type === 'StringLiteral') {
        classNameAttr.value.value = joinClassNames([
          classNameAttr.value.value,
          ...tailwindClassNames,
        ])
      } else if (classNameAttr.value?.type === 'JSXExpressionContainer') {
        const { expression } = classNameAttr.value

        switch (expression.type) {
          case 'StringLiteral': {
            expression.value = joinClassNames([
              expression.value,
              ...tailwindClassNames,
            ])
            break
          }

          case 'CallExpression': {
            // Check if the call expression is clsx
            if (
              expression.callee.type === 'Identifier' &&
              expression.callee.name === 'clsx'
            ) {
              // Add the tailwind classNames to the clsx arguments
              expression.arguments.push(
                j.stringLiteral(joinClassNames(tailwindClassNames))
              )
              break
            }
          }
        }
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
    // return root.toSource()
    // const config = await resolveConfig(file.path)
    return await format(root.toSource(), {
      // Default config
      tabWidth: 2,
      useTabs: false,
      semi: false,
      singleQuote: true,
      arrowParens: 'avoid',
      trailingComma: 'es5',

      // Override with target project's config
      // ...config,

      // Parser setup
      parser: 'typescript',
      plugins: [
        prettierPluginTypescript,
        prettierPluginBabel,
        prettierPluginEstree,
      ],
      filepath: file.path,
    })
  }

  return null
}

export default transform

const joinClassNames = (classNames: string[]) =>
  classNames.filter(Boolean).join(' ')
