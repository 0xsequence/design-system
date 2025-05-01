// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

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
      d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12.172a2 2 0 0 1-.586 1.414l-3.828 3.828a2 2 0 0 1-1.414.586H4a2 2 0 0 1-2-2zm2 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11h-4v4H8.75v-3.46l4.803-1.6a1.75 1.75 0 0 0 1.197-1.66v-1.925a2 2 0 1 0-1.5 0v1.924a.25.25 0 0 1-.17.237L8.75 14.96V9.5a1 1 0 0 0-.013-.14 2 2 0 1 0-1.474 0 1 1 0 0 0-.013.14V20H5a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgContractIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgContractIcon
