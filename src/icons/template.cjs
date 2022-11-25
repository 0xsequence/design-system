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
  import { Box } from '~/components/Box'
  ${NEWLINE}
  import { iconVariants } from './styles.css'
  import { IconProps } from './types'
  ${NEWLINE}
  const Svg = (props: SVGProps<SVGSVGElement>) => (
    ${jsx}
  )
  ${NEWLINE}
  const ${componentName} = ({ size = 'sm', ...props }: IconProps) => (
    <Box as={Svg} className={iconVariants({ size })} {...props} />
  );
  ${NEWLINE}
  ${exports};
  `
}

module.exports = template
