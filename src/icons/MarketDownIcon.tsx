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
      d="m2.16 4.128 9.189 15.762a.75.75 0 0 0 1.296 0L21.84 4.128A.75.75 0 0 0 21.195 3H2.805a.75.75 0 0 0-.648 1.128z"
    />
  </svg>
)

const SvgMarketDownIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgMarketDownIcon
