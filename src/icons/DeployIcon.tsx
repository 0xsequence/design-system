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
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.105 13.232a.996.996 0 0 1-1.348-.057l-1.932-1.932a.997.997 0 0 1-.057-1.349l.03-.034c.34-.403.794-.937 1.285-1.51l.303-.353.37-.43c.969-1.121 1.958-2.244 2.466-2.751 1.816-1.816 3.689-3.04 6.132-3.01a.849.849 0 0 1 .84.84c.03 2.443-1.194 4.316-3.01 6.132-.507.507-1.63 1.497-2.752 2.466a273.04 273.04 0 0 1-2.327 1.988Zm5.076-6.501a1.352 1.352 0 1 1-1.912-1.912 1.352 1.352 0 0 1 1.912 1.912Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M2.785 13.821a.4.4 0 1 0 .566.566l2.152-2.152a.4.4 0 0 0-.566-.566l-2.152 2.152ZM2.207 17.227a.4.4 0 0 0 .566.566l4.144-4.144a.4.4 0 1 0-.566-.566l-4.144 4.144ZM5.613 17.215a.4.4 0 0 1 0-.566l2.152-2.152a.4.4 0 0 1 .566.566l-2.152 2.152a.4.4 0 0 1-.566 0ZM2.005 9.902c1.6-1.6 3.611-2.442 5.46-2.462.032 0 .05.037.029.061a336.915 336.915 0 0 0-1.914 2.25l-.169.2a5.92 5.92 0 0 0-3.335.061c-.067.023-.12-.06-.07-.11ZM10.047 14.593v-.002l.001-.002.001-.001.2-.168a309.141 309.141 0 0 0 2.25-1.914.037.037 0 0 1 .06.029c-.019 1.849-.862 3.86-2.46 5.46-.05.05-.134-.005-.112-.071a5.92 5.92 0 0 0 .06-3.331Z"
    />
  </svg>
)

const SvgDeployIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgDeployIcon
