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
      d="M20 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-1 2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9V4zM7 20V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgSidebarIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgSidebarIcon
