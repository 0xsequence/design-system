import { API, FileInfo, JSXAttribute } from 'jscodeshift'
// import { resolveConfig } from 'prettier'
import * as prettierPluginBabel from 'prettier/plugins/babel'
// @ts-ignore
import * as prettierPluginEstree from 'prettier/plugins/estree'
import * as prettierPluginTypescript from 'prettier/plugins/typescript'
import { format } from 'prettier/standalone'

const COMPONENTS = ['Box', 'Text']

// const breakpoints = ['sm', 'md', 'lg', 'xl']
// const selectors = ['base', 'active', 'focus', 'disabled', 'hover', 'checked']

//type LiteralValue = string | number | boolean | null | RegExp

type MapFunc = string | ((value: string) => string | null)

const borderRadius =
  (side?: 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br'): MapFunc =>
  (value: string) => {
    const radii = {
      none: 'none',
      xs: '', // 4px
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

const MAPPING = {
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

  background: value => `bg-${kebabize(value.replace('background', ''))}`,

  borderRadius: borderRadius(),
  borderTopRadius: borderRadius('t'),
  borderBottomRadius: borderRadius('b'),
  borderLeftRadius: borderRadius('l'),
  borderRightRadius: borderRadius('r'),
  borderTopLeftRadius: borderRadius('tl'),
  borderTopRightRadius: borderRadius('tr'),
  borderBottomLeftRadius: borderRadius('bl'),
  borderBottomRightRadius: borderRadius('br'),

  placeItems: value => {
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

    return null
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

    return null
  },

  justifySelf: value => {
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

  backdropFilter: value => {
    switch (value) {
      case 'none':
        return 'backdrop-filter-none'
      case 'blur':
        return 'backdrop-filter'
    }

    return null
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
    }

    return null
  },

  flexShrink: value => {
    switch (value) {
      case '0':
        return 'flex-shrink-0'
      case '1':
        return 'flex-shrink'
    }

    return null
  },

  flexGrow: value => {
    switch (value) {
      case '0':
        return 'flex-grow-0'
      case '1':
        return 'flex-grow'
    }

    return null
  },

  flexWrap: value => `flex-${value}`,

  visibility: value => {
    switch (value) {
      case 'hidden':
        return 'invisible'
      case 'visible':
        return 'visible'
    }

    return null
  },

  textAlign: value => `text-${value}`,

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
    }

    return null
  },
} satisfies { [key: string]: MapFunc }

type AttributeName = keyof typeof MAPPING

const ATTRIBUTES = Object.keys(MAPPING) as any as AttributeName[]

const transform = async (file: FileInfo, api: API) => {
  const j = api.jscodeshift

  const root = j(file.source)

  let isMutated = false
  const mutatedAttributes: AttributeName[] = []

  root
    .findJSXElements()
    .filter(({ node }) => {
      const { openingElement } = node
      const { name, attributes } = openingElement

      // Check to see if the attribute name is in the list of attributes we want to transform
      return !!(
        name.type === 'JSXIdentifier' &&
        COMPONENTS.includes(name.name) &&
        attributes?.find(
          attribute =>
            attribute.type === 'JSXAttribute' &&
            attribute.name.type === 'JSXIdentifier' &&
            ATTRIBUTES.includes(attribute.name.name as AttributeName)
        )
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
          ATTRIBUTES.includes(attribute.name.name as AttributeName)
      ) as JSXAttribute[]

      // Map atomic props  to tailwind classNames
      const tailwindClassNames: string[] = attrs
        .map(attr => {
          const name = attr.name.name as AttributeName
          const map: MapFunc = MAPPING[name]

          // const parseValue = (node: JSXAttribute['value']) => {
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

          //           case 'ObjectExpression': {
          //             const { properties } = expression

          //             return properties.reduce((acc, property) => {
          //               if ( !property || property.type !== 'Property') {
          //                 return acc
          //               }

          //               const { key, value } = property

          //               if (key.type === 'Identifier') {
          //                 return {
          //                   ...acc,
          //                   [key.name]: parseValue(value),
          //                 }
          //               }

          //               return acc
          //             }, {})
          //           }
          //           // case 'TemplateLiteral':
          //           //   return expression.quasis

          //           // case 'ConditionalExpression':
          //         }
          //       }
          //     }
          //   }

          //   return null
          // }

          let result: string | null = null

          if (attr.value === null) {
            // Handle boolean props
            result = getClassName(map)
          } else if (attr.value) {
            switch (attr.value.type) {
              case 'StringLiteral':
                result = getClassName(map, attr.value.value)
                break
            }
          }

          if (result) {
            mutatedAttributes.push(name)
          }

          return result
        })
        .filter(isTruthy)

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
          !(
            attr.type === 'JSXAttribute' &&
            mutatedAttributes.includes(attr.name.name as AttributeName)
          )
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
  classNames.filter(isTruthy).join(' ')

const kebabize = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )

const isTruthy = <T>(value: T | undefined | null): value is T => Boolean(value)

const getClassName = (mapFn: MapFunc, value?: string) => {
  if (typeof mapFn === 'function') {
    return mapFn(value ? value : '')
  } else {
    return [mapFn, value].filter(isTruthy).join('-')
  }
}
