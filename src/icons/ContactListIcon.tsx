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
      d="M4.5 5a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5.5a3 3 0 0 0-3 3 1 1 0 0 0 2 0"
    />
    <path
      fill="currentColor"
      d="M3 8a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM2 15a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M3 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.025 11.481a2.5 2.5 0 1 0-3.05 0 4.085 4.085 0 0 0-2.725 3.852c0 .783.634 1.417 1.417 1.417h5.666c.783 0 1.417-.634 1.417-1.417a4.085 4.085 0 0 0-2.725-3.852m-1.692 1.269a2.583 2.583 0 0 0-2.582 2.5h5.498a2.583 2.583 0 0 0-2.582-2.5zM13.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      clipRule="evenodd"
    />
  </svg>
)

const SvgContactListIcon = ({
  className,
  size = 'sm',
  ...props
}: IconProps) => (
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

export default SvgContactListIcon
