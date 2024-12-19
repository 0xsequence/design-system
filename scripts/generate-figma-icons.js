import { client } from '@figma/code-connect'
import fs from 'fs'

import path from 'path'

async function getIcons() {
  const components = await client.getComponents(
    'https://www.figma.com/design/0OB1JVXSqaxmJDrP7qAMJr/Sequence-Design-System-1.1?node-id=9818-3653'
  )

  const rootPath = path.resolve('./src/icons')

  console.log(components.length, 'icons found in figma')

  console.log('Writing figma files...')

  let succeeded = 0
  let failed = 0

  for (const icon of components) {
    const componentName = `${capitalize(icon.name)}Icon`

    const componentPath = path.join(rootPath, `${componentName}.tsx`)

    // Check to see if a react component with the same name exists in the icons directory
    // before creating a figma file
    if (fs.existsSync(componentPath)) {
      const figmaFilename = `${componentName}.figma.tsx`

      console.log(`  ✔ ${figmaFilename}`)

      const figmaPath = path.join(rootPath, `${figmaFilename}`)
      const source = `import figma from '@figma/code-connect'
import React from 'react'

import { ${componentName} } from './index'

figma.connect(
  ${componentName},
  '${icon.figmaUrl}', 
  {
    example: () => <${componentName} />
  }
)
`

      fs.writeFileSync(figmaPath, source)

      succeeded++
    } else {
      console.log('  ✘ Couldnt find', componentName)
      failed++
    }
  }

  console.log('\nDone writing figma files')
  console.log(succeeded, 'succeeded', failed, 'failed')
}

getIcons()

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
