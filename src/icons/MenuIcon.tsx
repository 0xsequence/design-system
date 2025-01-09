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
      fillRule="evenodd"
      d="M4.868 6.582h11.1v1.5h-11.1v-1.5Zm0 3.377h11.1v1.5h-11.1v-1.5Zm11.1 3.377h-11.1v1.5h11.1v-1.5Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgMenuIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgMenuIcon
