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
      d="M19.096 11.968c0-.663-.529-1.201-1.181-1.201s-1.181.538-1.181 1.201.529 1.201 1.181 1.201 1.181-.538 1.181-1.201M7.16 7.959c0-.663-.529-1.2-1.181-1.2a1.19 1.19 0 0 0-1.181 1.2A1.19 1.19 0 0 0 5.979 9.16 1.19 1.19 0 0 0 7.16 7.959M7.16 16.04c0-.663-.529-1.2-1.181-1.2a1.19 1.19 0 0 0-1.181 1.2 1.19 1.19 0 0 0 1.181 1.201A1.19 1.19 0 0 0 7.16 16.04M19.198 15.977a.993.993 0 0 0-.985-1.002H9.46a.993.993 0 0 0-.985 1.002.994.994 0 0 0 .985 1.002h8.753a.994.994 0 0 0 .985-1.002M15.42 11.968a.995.995 0 0 0-.986-1.002h-8.65a.995.995 0 0 0-.986 1.002.994.994 0 0 0 .986 1.002h8.65a.994.994 0 0 0 .986-1.002M19.198 7.959a.994.994 0 0 0-.985-1.002H9.46a.994.994 0 0 0-.985 1.002.994.994 0 0 0 .985 1.003h8.753a.994.994 0 0 0 .985-1.003"
    />
  </svg>
)

const SvgSequenceIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgSequenceIcon
