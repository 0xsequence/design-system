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
      d="M2.418 7h1.5V3.5h3.5V2h-5v5Zm11-5v1.5h3.5V7h1.5V2h-5Zm-9.5 11h-1.5v5h5v-1.5h-3.5V13Zm9.5 5v-1.5h3.5V13h1.5v5h-5Zm-3.75-4v-3.25h-3.25v-1.5h3.25V6h1.5v3.25h3.25v1.5h-3.25V14h-1.5Z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgScanIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgScanIcon
