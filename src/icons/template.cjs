const NEWLINE = '\n'

const comments = `
// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
`

const template = ({ exports, componentName, jsx }, { tpl }) => {
  return tpl`
  ${comments}
  import { SVGProps } from 'react'
  ${NEWLINE}
  import { iconVariants } from './iconVariants'
  import { IconProps } from './types'
  ${NEWLINE}
  const Svg = (props: SVGProps<SVGSVGElement>) => (
    ${jsx}
  )
  ${NEWLINE}
  const ${componentName} = ({ size = 'sm', ...props }: IconProps) => (
    <Svg className={iconVariants({ size })} {...props} />
  );
  ${NEWLINE}
  ${exports};
  `
}

module.exports = template
