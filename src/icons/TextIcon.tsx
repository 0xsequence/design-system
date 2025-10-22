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
      d="M5 2a2 2 0 0 0-2 2v2a1 1 0 0 0 2 0V4h6v16H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3V4h6v2a1 1 0 1 0 2 0V4a2 2 0 0 0-2-2z"
    />
  </svg>
)

const SvgTextIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgTextIcon
