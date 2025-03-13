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
      d="M10.75 8.75v5h-1.5v-5zM9.375 7.477a.92.92 0 0 0 .668.273q.25 0 .461-.125.21-.13.34-.34a.896.896 0 0 0-.148-1.129.9.9 0 0 0-.653-.273.92.92 0 0 0-.668.273.88.88 0 0 0-.27.657.9.9 0 0 0 .27.664"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
      clipRule="evenodd"
    />
  </svg>
)

const SvgInfoIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgInfoIcon
