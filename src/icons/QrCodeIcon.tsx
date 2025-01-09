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
      d="M6.418 3.6h-2.5v2.5h2.5V3.6Zm0-1.5h1.5v5.5h-5.5V2.1h4Zm0 12h-2.5v2.5h2.5v-2.5Zm0-1.5h1.5v5.5h-5.5v-5.5h4Zm8-9h2.5v2.5h-2.5V3.6Zm4-1.5h-5.5v5.5h5.5V2.1Zm-1.5 12h-2.5v2.5h2.5v-2.5Zm0-1.5h1.5v5.5h-5.5v-5.5h4ZM9.668 2.1v7.25h-7.25v1.5h8.75V2.1h-1.5Zm1.5 10.5v5.5h-1.5v-5.5h1.5Zm1.75-1.75h5.5v-1.5h-5.5v1.5Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgQrCodeIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgQrCodeIcon
