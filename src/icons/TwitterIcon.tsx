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
      d="M13.904 10.47 21.352 2h-1.764L13.12 9.354 7.957 2H2l7.81 11.12L2 22h1.764l6.827-7.767L16.043 22H22M4.4 3.301h2.71l12.475 17.463h-2.709"
    />
  </svg>
)

const SvgTwitterIcon = ({ className, size, ...props }: IconProps) => (
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

export default SvgTwitterIcon
