// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { cn } from '~/utils'

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
      d="M16.097 14.68a7.87 7.87 0 1 0-12.8-9.14A7.872 7.872 0 0 0 14.68 16.096l5.609 5.61a1.003 1.003 0 0 0 1.417-1.418zm-1.33-8.038a5.866 5.866 0 0 1-1.671 8.125 5.864 5.864 0 1 1 1.671-8.125"
      clipRule="evenodd"
    />
  </svg>
)

const SvgSearchIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgSearchIcon
