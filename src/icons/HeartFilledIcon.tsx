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
      d="M13.35 19.67c-.76.7-1.93.7-2.69 0l-6.08-5.54a5.43 5.43 0 0 1-1.57-3.63c-.05-1.37.4-2.7 1.28-3.74a5.27 5.27 0 0 1 3.43-1.84 5.23 5.23 0 0 1 3.69 1l.6.44.6-.44c.91-.68 1.99-1.03 3.11-1.03.19 0 .39.01.58.03 1.33.15 2.55.8 3.43 1.84a5.42 5.42 0 0 1 1.28 3.74 5.43 5.43 0 0 1-1.57 3.62l-6.08 5.54z"
    />
  </svg>
)

const SvgHeartFilledIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgHeartFilledIcon
