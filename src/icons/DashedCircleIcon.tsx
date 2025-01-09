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
    <circle
      cx={10}
      cy={10}
      r={8}
      stroke="currentColor"
      strokeDasharray="2 4"
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </svg>
)

const SvgDashedCircleIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgDashedCircleIcon
