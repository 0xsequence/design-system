// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

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
      d="m10.418 11.06 4.47 4.47 1.06-1.06L11.48 10l4.47-4.47-1.06-1.06-4.47 4.47-4.47-4.47-1.06 1.06L9.357 10l-4.47 4.47 1.06 1.06 4.47-4.47Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgCloseIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgCloseIcon
