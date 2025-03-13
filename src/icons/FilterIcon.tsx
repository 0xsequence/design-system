// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { cn } from '~/utils'

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
      d="M7 4a1 1 0 0 0-2 0v5.17a3 3 0 0 1 2 0zM7 14.83a3 3 0 0 1-2 0V17a1 1 0 1 0 2 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M15 4a1 1 0 1 0-2 0v1.17a3 3 0 0 1 2 0zM15 10.83a3 3 0 0 1-2 0V17a1 1 0 1 0 2 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    />
  </svg>
)

const SvgFilterIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgFilterIcon
