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
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.926 2H21a1 1 0 0 1 1 1v.074c0 1.533 0 2.984-.44 4.449-.42 1.404-1.22 2.755-2.653 4.268l.4 2a6.3 6.3 0 0 1-1.721 5.684l-1.24 1.24a2.06 2.06 0 0 1-3.255-.456l-1.897-3.416-4.037-4.037-3.415-1.897a2.06 2.06 0 0 1-.457-3.256l1.24-1.239a6.3 6.3 0 0 1 5.685-1.721l2 .4c1.512-1.433 2.863-2.233 4.267-2.654C17.942 2 19.393 2 20.927 2M10.702 6.83l-.885-.176A4.3 4.3 0 0 0 5.94 7.828l-1.24 1.24a.1.1 0 0 0-.014.022.1.1 0 0 0-.002.027q.003.017.01.026.003.007.02.017l2.807 1.56zm-1.59 5.103 2.971 2.971.044-.034c.451-.352 1.065-.834 1.715-1.352 1.323-1.056 2.728-2.208 3.274-2.754 1.506-1.506 2.192-2.692 2.53-3.816.27-.904.334-1.817.35-2.943-1.126.015-2.04.079-2.944.35-1.116.335-2.292 1.013-3.78 2.494zm4.179 4.566 1.549 2.788a.1.1 0 0 0 .017.02.1.1 0 0 0 .026.01q.016.002.027-.002a.1.1 0 0 0 .022-.015l1.24-1.239a4.3 4.3 0 0 0 1.174-3.879l-.162-.808c-.65.546-1.403 1.156-2.095 1.707a222 222 0 0 1-1.731 1.365zm3.651-9.44a1 1 0 0 1 0 1.413l-1.058 1.06a1 1 0 1 1-1.415-1.415l1.06-1.059a1 1 0 0 1 1.413 0M2.738 17.211a3.12 3.12 0 0 1 3.057-2.506h.381a3.12 3.12 0 0 1 3.118 3.117v.382a3.12 3.12 0 0 1-2.506 3.057l-3.592.719a1 1 0 0 1-1.177-1.177zm3.057-.506c-.533 0-.992.376-1.096.898l-.424 2.121 2.12-.424c.523-.104.9-.563.9-1.096v-.381c0-.618-.501-1.118-1.119-1.118z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgDeployIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgDeployIcon
