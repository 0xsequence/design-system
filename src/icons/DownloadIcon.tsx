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
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.707 11.793a1 1 0 0 1 0 1.414L12 16.914l-3.707-3.707a1 1 0 1 1 1.414-1.414L11 13.086V4a1 1 0 1 1 2 0v9.086l1.293-1.293a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 15a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
)

const SvgDownloadIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgDownloadIcon
