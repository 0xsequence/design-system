// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { cn } from '~/utils'

import { iconVariants } from './iconVariants'
import { IconProps } from './types'

const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.918 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Zm1.5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-9 1.469v.133h1.48v-.133c.003-.255.036-.47.098-.645a1.3 1.3 0 0 1 .293-.46c.133-.134.303-.261.508-.384.245-.145.457-.308.637-.488.18-.182.319-.39.418-.625.101-.237.152-.508.152-.812 0-.456-.113-.845-.34-1.168a2.131 2.131 0 0 0-.937-.739c-.399-.171-.857-.257-1.375-.257-.471 0-.902.084-1.293.254-.39.166-.704.42-.941.761-.237.339-.362.768-.375 1.29h1.593c.008-.214.06-.393.157-.536a.917.917 0 0 1 .37-.328 1.06 1.06 0 0 1 .481-.113c.175 0 .333.036.477.11a.858.858 0 0 1 .347.312.863.863 0 0 1 .13.472c0 .17-.039.323-.114.461-.076.136-.177.26-.305.371a3.69 3.69 0 0 1-.433.325 2.69 2.69 0 0 0-.555.453c-.154.166-.27.385-.352.656-.078.27-.118.634-.12 1.09Zm.106 2.36a.917.917 0 0 0 .668.273c.166 0 .32-.042.46-.125.141-.086.255-.2.34-.34a.897.897 0 0 0-.149-1.129.907.907 0 0 0-.651-.274.917.917 0 0 0-.668.274.882.882 0 0 0-.27.656.899.899 0 0 0 .27.664Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgHelpIcon = ({ className, size = 'sm', ...props }: IconProps) => (
  <Svg
    className={cn(
      iconVariants({
        size,
      }),
      className
    )}
    {...props}
  />
)

export default SvgHelpIcon
