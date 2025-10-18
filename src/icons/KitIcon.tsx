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
      d="M7 9.5a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zM7 13a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zM15 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM7 16.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM12 16.5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 2a4 4 0 0 0-4 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-1a4 4 0 0 0-4-4zm0 2a2 2 0 0 0-2 2h8a2 2 0 0 0-2-2zm10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgKitIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgKitIcon
