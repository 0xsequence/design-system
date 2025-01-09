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
      d="M14.648 8.35 10.797 4.5h-.047v3.85h3.898ZM9.25 4.5H5.918v11h9V9.85H9.25V4.5ZM16.418 8l-5-5h-7v14h12V8Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgDocsIcon = ({ size = 'sm', ...props }: IconProps) => (
  <Svg
    className={iconVariants({
      size,
    })}
    {...props}
  />
)

export default SvgDocsIcon
