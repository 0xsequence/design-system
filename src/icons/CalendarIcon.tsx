// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import type { SVGProps } from 'react'

import { cn } from '../utils/classnames.js'

import { iconVariants } from './iconVariants.js'
import type { IconProps } from './types.js'

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
      d="M7 2a1 1 0 0 0-1 1v2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2V3a1 1 0 1 0-2 0v2H8V3a1 1 0 0 0-1-1m13 6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2h16zm-1 12a1 1 0 0 0 1-1v-7H4v7a1 1 0 0 0 1 1z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgCalendarIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgCalendarIcon
