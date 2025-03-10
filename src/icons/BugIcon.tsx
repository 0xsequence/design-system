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
      d="M15.833 11.667H17.5a.833.833 0 0 0 0-1.667h-1.667v-.833a4.3 4.3 0 0 0-.175-1.134 4.17 4.17 0 0 0 2.675-3.866.834.834 0 0 0-1.666 0 2.5 2.5 0 0 1-1.784 2.391 4.2 4.2 0 0 0-1.55-1.225q.014-.166 0-.333a3.333 3.333 0 1 0-6.666 0q-.013.167 0 .333a4.2 4.2 0 0 0-1.584 1.225 2.5 2.5 0 0 1-1.75-2.391.833.833 0 0 0-1.666 0 4.17 4.17 0 0 0 2.675 3.866c-.11.369-.168.75-.175 1.134V10H2.5a.834.834 0 0 0 0 1.667h1.667v.833q.001.58.116 1.15a4.17 4.17 0 0 0-2.616 3.85.834.834 0 0 0 1.666 0 2.5 2.5 0 0 1 1.509-2.283 5.833 5.833 0 0 0 10.316 0 2.5 2.5 0 0 1 1.509 2.283.833.833 0 0 0 1.666 0 4.17 4.17 0 0 0-2.616-3.85q.115-.57.116-1.15zm-6.666 4.916A4.17 4.17 0 0 1 5.833 12.5V9.167a2.5 2.5 0 0 1 2.5-2.5h.834zM8.333 5a1.667 1.667 0 1 1 3.334 0zm5.834 7.5a4.17 4.17 0 0 1-3.334 4.083V6.667h.834a2.5 2.5 0 0 1 2.5 2.5z"
    />
  </svg>
)

const SvgBugIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgBugIcon
