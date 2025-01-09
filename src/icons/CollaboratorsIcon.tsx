// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

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
      d="M6.648 10.767a2.883 2.883 0 1 0 0-5.767 2.883 2.883 0 0 0 0 5.767Zm9.593-2.883a2.883 2.883 0 1 1-5.766 0 2.883 2.883 0 0 1 5.766 0Zm-2.883 3.864c2.828 0 5.123 1.875 5.148 4.196H8.21c.025-2.321 2.32-4.196 5.148-4.196Zm-4.303.49a6.028 6.028 0 0 0-2.407-.49c-2.828 0-5.123 1.874-5.148 4.195h5.71v-.01c.016-1.5.737-2.781 1.845-3.695Z"
    />
  </svg>
)

const SvgCollaboratorsIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgCollaboratorsIcon
