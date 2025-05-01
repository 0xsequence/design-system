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
      d="M4 12a8 8 0 1 1 13.533 5.778 1 1 0 0 0 1.384 1.444A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.97 9.97 0 0 0 3.083 7.222 1 1 0 1 0 1.384-1.444A7.97 7.97 0 0 1 4 12"
    />
    <path
      fill="currentColor"
      d="M12 8a4 4 0 0 0-2.8 6.857 1 1 0 0 1-1.4 1.428 6 6 0 1 1 8.4 0 1 1 0 0 1-1.4-1.428A4 4 0 0 0 12 8"
    />
    <path
      fill="currentColor"
      d="M10 12a2 2 0 1 1 2.969 1.75q.03.12.031.25v6h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-6q0-.13.031-.25A2 2 0 0 1 10 12"
    />
  </svg>
)

const SvgNetworkIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgNetworkIcon
