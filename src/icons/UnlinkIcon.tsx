// Auto-generated file created by svgr-cli source /src/icons/template.js
// Run pnpm build:icons to update
import type { SVGProps } from 'react'

import { cn } from '../utils/classnames.js'

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
      d="M6.5 8.855A3.502 3.502 0 0 0 5.5 2a3.5 3.5 0 0 0-1 6.855v4.817c0 2.672 3.231 4.01 5.121 2.12l.447-.446-1.363 5.089a1 1 0 1 0 1.932.517l2.314-8.64q.016-.05.028-.102l2.316-8.645a1 1 0 1 0-1.932-.517l-2.26 8.435-2.896 2.896c-.63.63-1.707.184-1.707-.707zM5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15 18.5a3.5 3.5 0 0 1 2.5-3.355v-4.817c0-.89-1.077-1.337-1.707-.707l-.408.408.719-2.683c1.668-.213 3.396 1.028 3.396 2.982v4.817a3.502 3.502 0 0 1-1 6.855 3.5 3.5 0 0 1-3.5-3.5m5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      clipRule="evenodd"
    />
  </svg>
)

const SvgUnlinkIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgUnlinkIcon
