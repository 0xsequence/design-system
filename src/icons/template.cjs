const NEWLINE = '\n'

const comments = `
// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run yarn build:icons to update
`

const template = ({ exports, componentName, jsx }, { tpl }) => {
  return tpl`
  ${comments}
  import { SVGProps } from 'react'
  ${NEWLINE}
  import { Box } from '../components/Box/Box'
  ${NEWLINE}
  import { IconProps } from './types'
  ${NEWLINE}
  const Svg = (props: SVGProps<SVGSVGElement>) => (
    ${jsx}
  )
  ${NEWLINE}
  const ${componentName} = (props: IconProps) => (
    <Box as={Svg} {...props} />
  );
  ${NEWLINE}
  ${exports};
  `
}

module.exports = template
