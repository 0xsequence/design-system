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
  import { cn } from '~/utils'
  ${NEWLINE}
  import { iconVariants } from './iconVariants.js'
  import type { IconProps } from './types.js'
  ${NEWLINE}
  const Svg = (props: SVGProps<SVGSVGElement>) => (
    ${jsx}
  )
  ${NEWLINE}
  const ${componentName} = ({ className, size = 'sm', ...props }: IconProps) => (
    <Svg className={cn(iconVariants({ size }), className)} {...props} />
  );
  ${NEWLINE}
  ${exports};
  `
}

module.exports = template
