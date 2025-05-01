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
      d="m20.929 1.628 2 5c.047.118.071.245.071.372v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7c0-.127.024-.254.071-.372l2-5A1 1 0 0 1 4 1h16a1 1 0 0 1 .929.628M20.523 6l-1.2-3H4.677l-1.2 3zM12 10c1.306 0 2.418.835 2.83 2H21V8H3v4h6.17A3 3 0 0 1 12 10m0 6a3 3 0 0 1-2.83-2H3v7h18v-7h-6.17A3 3 0 0 1 12 16m1-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
)

const SvgInventoryIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgInventoryIcon
