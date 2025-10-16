import { API, Collection, FileInfo, JSXAttribute } from 'jscodeshift'

import {
  ATOM_KEYS,
  AtomKey,
  getAtomProps,
  getTailwindClassName,
  hasAtomProps,
} from './atom-helpers'

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

const COMPONENTS_TO_TRANSFORM = ['Text', 'Card', 'Button', 'IconButton']

const COMPONENT_SPECIFIC_PROPS = {
  Text: [
    'variant',
    'color',
    'fontWeight',
    'hidden',
    'italic',
    'underline',
    'ellipsis',
    'uppercase',
    'capitalize',
    'nowrap',
  ],
  Card: ['clickable', 'outlined', 'disabled', 'blur'],
  Button: [
    'variant',
    'shape',
    'size',
    'disabled',
    'pending',
    'label',
    'leftIcon',
    'rightIcon',
    'iconOnly',
  ],
  IconButton: ['disabled', 'pending', 'size', 'variant', 'icon'],
}

const ALWAYS_PARENT_PROPS = ['className', 'style']

const TEXT_SPECIFIC_PROPS = [
  'variant',
  'color',
  'fontWeight',
  'hidden',
  'italic',
  'underline',
  'ellipsis',
  'uppercase',
  'capitalize',
]

function transformAsChildComponents(j: API['jscodeshift'], root: Collection) {
  root
    .find(j.JSXElement, {
      openingElement: {
        name: {
          type: 'JSXIdentifier',
          name: name => COMPONENTS_TO_TRANSFORM.includes(name),
        },
      },
    })
    .forEach(path => {
      const { node } = path
      const { openingElement, closingElement, children } = node
      const componentName = openingElement.name
        .name as keyof typeof COMPONENT_SPECIFIC_PROPS

      // Find the "as" prop
      const asProp = openingElement.attributes.find(
        attr =>
          attr.type === 'JSXAttribute' &&
          attr.name.type === 'JSXIdentifier' &&
          attr.name.name === 'as'
      )

      if (!asProp?.value) {
        return
      }

      // Separate component-specific props from passthrough props
      const componentProps: JSXAttribute[] = []
      const passthroughProps: JSXAttribute[] = []

      openingElement.attributes.forEach(attr => {
        // Skip the "as" prop
        if (attr === asProp) {
          return
        }

        if (
          attr.type === 'JSXAttribute' &&
          attr.name.type === 'JSXIdentifier' &&
          (COMPONENT_SPECIFIC_PROPS[componentName].includes(attr.name.name) ||
            ALWAYS_PARENT_PROPS.includes(attr.name.name))
        ) {
          componentProps.push(attr)
        } else {
          passthroughProps.push(attr)
        }
      })

      // Add asChild prop to component props
      componentProps.push(j.jsxAttribute(j.jsxIdentifier('asChild')))

      // Create the "as" component
      let asComponent
      if (asProp.value.type === 'StringLiteral') {
        asComponent = j.jsxIdentifier(asProp.value.value)
      } else if (
        asProp.value.type === 'JSXExpressionContainer' &&
        asProp.value.expression.type === 'Identifier'
      ) {
        asComponent = j.jsxIdentifier(asProp.value.expression.name)
      } else if (
        asProp.value.type === 'JSXExpressionContainer' &&
        asProp.value.expression.type === 'MemberExpression'
      ) {
        const expr = asProp.value.expression
        asComponent = j.jsxMemberExpression(
          j.jsxIdentifier(expr.object.name),
          j.jsxIdentifier(expr.property.name)
        )
      } else {
        return
      }

      // Update the original component with its specific props
      openingElement.attributes = componentProps
      openingElement.selfClosing = false

      // Create the inner "as" component with passthrough props
      const asElement = j.jsxElement(
        j.jsxOpeningElement(asComponent, passthroughProps, !children?.length),
        children?.length ? j.jsxClosingElement(asComponent) : null,
        children || []
      )

      // Set the transformed children
      node.children = [asElement]

      // Ensure the original component has a closing tag
      if (!closingElement) {
        node.closingElement = j.jsxClosingElement(openingElement.name)
      }
    })
}

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

function transformAtomPropsToTailwind(j: API['jscodeshift'], root: Collection) {
  root.find(j.JSXElement).forEach(path => {
    const { node } = path
    const { openingElement } = node

    const isTextComponent =
      openingElement.name.type === 'JSXIdentifier' &&
      openingElement.name.name === 'Text'

    // Convert JSXAttributes to a Record<string, string>
    const props: Record<string, string> = {}
    const atomAttributes: JSXAttribute[] = []
    let existingClassNameAttr: JSXAttribute | undefined

    openingElement.attributes.forEach(attr => {
      if (attr.type === 'JSXAttribute' && attr.name.type === 'JSXIdentifier') {
        // Store className attribute separately
        if (attr.name.name === 'className') {
          existingClassNameAttr = attr
          return
        }

        // For Text components, skip Text-specific props
        if (isTextComponent && TEXT_SPECIFIC_PROPS.includes(attr.name.name)) {
          return
        }

        // Store atom props for later removal
        if (ATOM_KEYS.includes(attr.name.name as any)) {
          atomAttributes.push(attr)
        }

        // Convert attribute value to string
        if (attr.value?.type === 'StringLiteral') {
          props[attr.name.name] = attr.value.value
        } else if (
          attr.value?.type === 'JSXExpressionContainer' &&
          attr.value.expression.type === 'StringLiteral'
        ) {
          props[attr.name.name] = attr.value.expression.value
        }
      }
    })

    // Check if we have any atom props to transform
    if (!hasAtomProps(props)) {
      return
    }

    // Get atom props and generate Tailwind classes
    const atomProps = getAtomProps(props)
    const tailwindClasses = Object.entries(atomProps)
      .map(([key, value]) => getTailwindClassName(key as AtomKey, value))
      .filter(Boolean)
      .join(' ')

    // Create or update className prop
    let classNameProp
    if (existingClassNameAttr?.value) {
      if (existingClassNameAttr.value.type === 'StringLiteral') {
        // For string literals, combine with space
        classNameProp = j.jsxAttribute(
          j.jsxIdentifier('className'),
          j.stringLiteral(
            `${existingClassNameAttr.value.value} ${tailwindClasses}`
          )
        )
      } else if (
        existingClassNameAttr.value.type === 'JSXExpressionContainer'
      ) {
        const expr = existingClassNameAttr.value.expression
        if (
          expr.type === 'CallExpression' &&
          expr.callee.type === 'Identifier' &&
          (expr.callee.name === 'clsx' || expr.callee.name === 'cn')
        ) {
          // For clsx/cn calls, add tailwindClasses as the first argument
          expr.arguments.unshift(j.stringLiteral(tailwindClasses))
          classNameProp = existingClassNameAttr
        } else {
          // For other expressions, use template literal with direct string for tailwind classes
          classNameProp = j.jsxAttribute(
            j.jsxIdentifier('className'),
            j.jsxExpressionContainer(
              j.templateLiteral(
                [
                  j.templateElement({ raw: '', cooked: '' }, false),
                  j.templateElement(
                    {
                      raw: ' ' + tailwindClasses,
                      cooked: ' ' + tailwindClasses,
                    },
                    true
                  ),
                ],
                [expr]
              )
            )
          )
        }
      }
    } else {
      // Create new className prop
      classNameProp = j.jsxAttribute(
        j.jsxIdentifier('className'),
        j.stringLiteral(tailwindClasses)
      )
    }

    // Remove atom props and update className
    openingElement.attributes = [
      classNameProp,
      ...openingElement.attributes.filter(
        attr => !atomAttributes.includes(attr) && attr !== existingClassNameAttr
      ),
    ]
  })
}

function transformAtomsFn(j: API['jscodeshift'], root: Collection) {
  root
    .find(j.CallExpression, {
      callee: {
        type: 'Identifier',
        name: 'atoms',
      },
    })
    .forEach(path => {
      const { node } = path
      const firstArg = node.arguments[0]

      // Only handle object literal arguments
      if (firstArg.type !== 'ObjectExpression') {
        return
      }

      // Convert object properties to Record<string, string>
      const props: Record<string, string> = {}
      firstArg.properties.forEach(prop => {
        if (
          prop.type === 'ObjectProperty' &&
          prop.key.type === 'Identifier' &&
          (prop.value.type === 'StringLiteral' ||
            prop.value.type === 'NumericLiteral')
        ) {
          props[prop.key.name] =
            prop.value.type === 'StringLiteral'
              ? prop.value.value
              : prop.value.value.toString()
        }
      })

      // Get atom props and generate Tailwind classes
      const atomProps = getAtomProps(props)
      const tailwindClasses = Object.entries(atomProps)
        .map(([key, value]) => getTailwindClassName(key as AtomKey, value))
        .filter(Boolean)
        .join(' ')

      // Replace atoms() call with string literal
      path.replace(j.stringLiteral(tailwindClasses))
    })
}

const transform = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const root = j(file.source)

  // Remove old imports from @0xsequence/design-system Box, BoxProps, PolymorphicComponent, etc.
  removeOldImports(j, root)

  // Transform Box components to their target elements
  transformBoxComponents(j, root)

  // Transform atom props to Tailwind classes
  transformAtomPropsToTailwind(j, root)

  // Transform atoms() function calls to Tailwind classes
  transformAtomsFn(j, root)

  // Transform components that use asChild pattern
  transformAsChildComponents(j, root)

  return root.toSource()
}

export default transform
