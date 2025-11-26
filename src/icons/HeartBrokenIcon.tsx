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
      d="M2.69 2.784a1 1 0 0 1 1.414-.006l16 15.873a1 1 0 0 1-1.408 1.42l-2.122-2.105-.044.045-2.517 2.266.001.001a2.997 2.997 0 0 1-4.039 0L3.9 14.786l-.018-.018-.019-.018a6.42 6.42 0 0 1-1.861-4.263l-.006-.3A6.35 6.35 0 0 1 3.52 6.082l.006-.008.007-.008a7 7 0 0 1 .517-.526L2.696 4.198a1 1 0 0 1-.006-1.414M5.42 6.999q-.184.162-.386.39a4.35 4.35 0 0 0-1.038 2.803l.004.206a4.42 4.42 0 0 0 1.26 2.92l6.062 5.48.004.004a.997.997 0 0 0 1.34 0l.006-.005 2.483-2.24L5.468 6.95q-.024.025-.05.05m6.588-1.905a6.26 6.26 0 0 1 4.392-1.181h.004a6.29 6.29 0 0 1 4.077 2.17A6.35 6.35 0 0 1 22 10.486a6.4 6.4 0 0 1-1.86 4.254l-.021.02-.022.02-.609.545a1 1 0 0 1-1.334-1.491l.584-.523a4.4 4.4 0 0 0 1.264-2.913 4.35 4.35 0 0 0-1.041-3.017l-.002-.001A4.29 4.29 0 0 0 16.18 5.9a4.26 4.26 0 0 0-2.988.804l-.005.004-.6.436-.588.428-1.188-.864-.007-.005a4.23 4.23 0 0 0-1.86-.778 1 1 0 0 1 .31-1.976c.99.156 1.928.547 2.733 1.142l.012.007z"
    />
  </svg>
)

const SvgHeartBrokenIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgHeartBrokenIcon
