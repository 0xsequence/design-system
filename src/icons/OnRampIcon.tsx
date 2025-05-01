// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import { SVGProps } from 'react'

import { cn } from '~/utils'

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
      d="M8.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0 2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m6.526 8.244 1.667-2a.4.4 0 0 1 .614 0l1.667 2a.4.4 0 0 1 0 .512l-1.667 2a.4.4 0 0 1-.614 0l-1.667-2a.4.4 0 0 1 0-.512"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.826 10a6.5 6.5 0 0 0 .155-2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3.914C2.132 22 1.24 19.846 2.5 18.586l3.924-3.924a6.5 6.5 0 0 0 2.504.324L3.914 20h4.172l10-10zm-3.912 10L20 10.914V20z"
      clipRule="evenodd"
    />
  </svg>
)

const SvgOnRampIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgOnRampIcon
