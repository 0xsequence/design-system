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
      d="M13.5 15c0 .534-.279 1.003-.7 1.268q.012.067.012.138v1.282a.813.813 0 0 1-1.624 0v-1.282q0-.07.011-.137A1.499 1.499 0 0 1 12 13.5a1.5 1.5 0 0 1 1.5 1.5"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 8a5 5 0 0 1 10 0v2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3zm5-3a3 3 0 0 1 3 3v2H9V8a3 3 0 0 1 3-3m-6 8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgLockIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgLockIcon
