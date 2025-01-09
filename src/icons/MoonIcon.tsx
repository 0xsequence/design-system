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
      d="M15.918 14.994v.752A7.003 7.003 0 0 1 6.968 5.05a7.003 7.003 0 0 1 8.95-.796v.752a4.979 4.979 0 0 0-3.293 1.459 5 5 0 0 0 3.293 8.53Zm-4.353-.398c.329.329.684.615 1.059.859a5.5 5.5 0 1 1 0-10.91 6.5 6.5 0 0 0-1.06 10.051Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgMoonIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgMoonIcon
