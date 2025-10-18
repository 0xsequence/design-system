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
      d="M13.126 8A4.002 4.002 0 0 0 21 7a4 4 0 0 0-7.874-1H9a3 3 0 0 0-3 3v4.126A4.002 4.002 0 0 0 7 21a4 4 0 0 0 1-7.874V9a1 1 0 0 1 1-1zM17 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      clipRule="evenodd"
    />
  </svg>
)

const SvgRelayerIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgRelayerIcon
