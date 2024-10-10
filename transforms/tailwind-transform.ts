import { API, FileInfo, JSXAttribute } from 'jscodeshift'
// import { resolveConfig } from 'prettier'
import * as prettierPluginBabel from 'prettier/plugins/babel'
// @ts-ignore
import * as prettierPluginEstree from 'prettier/plugins/estree'
import * as prettierPluginTypescript from 'prettier/plugins/typescript'
import { format } from 'prettier/standalone'

import {
  getTailwindClassName,
  TailwindMapName,
  TAILWIND_MAP_NAMES,
} from '../src/css/tailwind'
import { isTruthy } from '../src/utils'

const COMPONENTS = ['Box', 'Text']

// const breakpoints = ['sm', 'md', 'lg', 'xl']
// const selectors = ['base', 'active', 'focus', 'disabled', 'hover', 'checked']

const transform = async (file: FileInfo, api: API) => {
  const j = api.jscodeshift

  const root = j(file.source)

  let isMutated = false
  const mutatedAttributes: TailwindMapName[] = []

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
            TAILWIND_MAP_NAMES.includes(attribute.name.name)
        )
      )
    })
    .replaceWith(({ node }) => {
      isMutated = true

      if (!node.openingElement?.attributes) {
        return node
      }

      // Replace Box components with div if there is no "as" prop
      // if (
      //   node.openingElement.name.type === 'JSXIdentifier' &&
      //   node.openingElement.name.name === 'Box'
      // ) {
      //   // Check if node has an "as" prop
      //   const asProp = node.openingElement.attributes.find(
      //     attribute =>
      //       attribute.type === 'JSXAttribute' &&
      //       attribute.name.type === 'JSXIdentifier' &&
      //       attribute.name.name === 'as'
      //   ) as JSXAttribute

      //   if (!asProp) {
      //     node.openingElement.name.name = 'div'

      //     if (!node.openingElement.selfClosing) {
      //       if (node.closingElement?.name.type === 'JSXIdentifier') {
      //         node.closingElement.name.name = 'div'
      //       }
      //     }
      //   }
      // }

      // Find all the attributes that we want to transform
      const attrs = node.openingElement.attributes.filter(
        attribute =>
          attribute.type === 'JSXAttribute' &&
          attribute.name.type === 'JSXIdentifier' &&
          TAILWIND_MAP_NAMES.includes(attribute.name.name)
      ) as JSXAttribute[]

      // Map atomic props to tailwind classNames
      const tailwindClassNames: string[] = attrs
        .map(attr => {
          const name = attr.name.name as TailwindMapName

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
            result = getTailwindClassName(name)
          } else if (attr.value) {
            switch (attr.value.type) {
              case 'StringLiteral':
                result = getTailwindClassName(name, attr.value.value)
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
            mutatedAttributes.includes(attr.name.name as TailwindMapName)
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
