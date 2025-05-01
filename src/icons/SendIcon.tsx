// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import type { SVGProps } from 'react'

import { cn } from '~/utils/classnames.js'

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
      fillRule="evenodd"
      d="M3 8.586a3 3 0 0 0 .879 2.121L5.172 12l-1.293 1.293A3 3 0 0 0 3 15.414v4.42c0 1.585 1.69 2.598 3.088 1.852l14.688-7.833c1.482-.79 1.482-2.915 0-3.706L6.088 2.314C4.69 1.568 3 2.58 3 4.167zm2.293.707A1 1 0 0 1 5 8.586v-4.42a.1.1 0 0 1 .147-.088l14.688 7.834a.1.1 0 0 1 0 .176L5.147 19.922A.1.1 0 0 1 5 19.833v-4.419a1 1 0 0 1 .293-.707L7 13h4.5a1 1 0 0 0 0-2H7z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgSendIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgSendIcon
