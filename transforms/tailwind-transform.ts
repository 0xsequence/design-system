import {
  API,
  FileInfo,
  JSXAttribute,
  JSXElement,
  JSXIdentifier,
  Collection,
  JSXExpressionContainer,
} from 'jscodeshift'

const IMPORTS_TO_REMOVE = [
  'Box',
  'BoxProps',
  'PolymorphicComponent',
  'PolymorphicProps',
  'PolymorphicRef',
  'atoms',
  'Atoms',
  'vars',
]

function transformBoxComponents(j: API['jscodeshift'], root: Collection) {
  root
    .find(j.JSXElement, {
      openingElement: {
        name: { type: 'JSXIdentifier', name: 'Box' },
      },
    })
    .forEach(path => {
      const { node } = path
      const { openingElement, closingElement, children } = node

      // Find the "as" prop
      const asProp = openingElement.attributes.find(
        attr =>
          attr.type === 'JSXAttribute' &&
          attr.name.type === 'JSXIdentifier' &&
          attr.name.name === 'as'
      )

      if (!asProp?.value) {
        // If no "as" prop, transform Box to div
        openingElement.name.name = 'div'
        if (closingElement) {
          closingElement.name.name = 'div'
        }
        return
      }

      // Get all props except "as"
      const otherProps = openingElement.attributes.filter(
        attr => attr !== asProp
      )

      let targetName
      if (asProp.value.type === 'StringLiteral') {
        // Handle string literals like as="div"
        targetName = j.jsxIdentifier(asProp.value.value)
      } else if (
        asProp.value.type === 'JSXExpressionContainer' &&
        asProp.value.expression.type === 'Identifier'
      ) {
        // Handle component references like as={Link}
        targetName = j.jsxIdentifier(asProp.value.expression.name)
      } else if (
        asProp.value.type === 'JSXExpressionContainer' &&
        asProp.value.expression.type === 'MemberExpression'
      ) {
        // Handle member expressions like as={motion.div} or as={DropdownMenu.Trigger}
        const expr = asProp.value.expression
        targetName = j.jsxMemberExpression(
          j.jsxIdentifier(expr.object.name),
          j.jsxIdentifier(expr.property.name)
        )
      } else {
        return
      }

      // Create the new element with all props except "as"
      const newElement = j.jsxElement(
        j.jsxOpeningElement(targetName, otherProps, openingElement.selfClosing),
        openingElement.selfClosing ? null : j.jsxClosingElement(targetName),
        children
      )

      path.replace(newElement)
    })
}

function removeOldImports(j: API['jscodeshift'], root: Collection) {
  root
    .find(j.ImportDeclaration, {
      source: {
        value: '@0xsequence/design-system',
      },
    })
    .forEach(path => {
      const { specifiers } = path.node

      if (!specifiers) {
        return
      }

      // Filter out the imports we want to remove
      const newSpecifiers = specifiers.filter(specifier => {
        if (
          specifier.type === 'ImportSpecifier' &&
          IMPORTS_TO_REMOVE.includes(specifier.imported.name)
        ) {
          return false
        }
        return true
      })

      // If all imports were removed, remove the entire import declaration
      if (newSpecifiers.length === 0) {
        j(path).remove()
      } else if (newSpecifiers.length !== specifiers.length) {
        // Otherwise update the import with remaining specifiers
        path.node.specifiers = newSpecifiers
      }
    })
}

const transform = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const root = j(file.source)

  // Remove old imports from @0xsequence/design-system Box, BoxProps, PolymorphicComponent, etc.
  removeOldImports(j, root)

  // Transform Box components to their target elements
  transformBoxComponents(j, root)

  return root.toSource()
}

export default transform
