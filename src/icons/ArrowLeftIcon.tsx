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
      d="M10.526 4.284a1 1 0 0 0-1.414.018l-6.828 7a1 1 0 0 0 0 1.396l6.828 7a1 1 0 1 0 1.431-1.396L5.374 13H21a1 1 0 1 0 0-2H5.372l5.172-5.302a1 1 0 0 0-.018-1.414"
      clipRule="evenodd"
    />
  </svg>
)

const SvgArrowLeftIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgArrowLeftIcon
