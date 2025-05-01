// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import type { SVGProps } from 'react'

import { cn } from '~/utils/classnames.js'

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
      d="M3 7a1 1 0 0 1 1-1h3V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m7-3a1 1 0 0 0-1 1v1h6V5a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M14 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"
    />
    <path
      fill="currentColor"
      d="M17 22a2 2 0 0 0 2-2V9h-2v11H7V9H5v11a2 2 0 0 0 2 2z"
    />
  </svg>
)

const SvgTrashIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgTrashIcon
