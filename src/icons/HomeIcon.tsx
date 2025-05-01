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
      d="M4.05 8.597A3 3 0 0 0 3 10.877V19a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-8.118a3 3 0 0 0-1.049-2.279l-6.5-5.566a3 3 0 0 0-3.902 0zM13 14a1 1 0 0 1 1 1v5h5a1 1 0 0 0 1-1v-8.118a1 1 0 0 0-.35-.76l-6.5-5.565a1 1 0 0 0-1.3 0l-6.5 5.56a1 1 0 0 0-.35.76V19a1 1 0 0 0 1 1h5v-5a1 1 0 0 1 1-1z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgHomeIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgHomeIcon
