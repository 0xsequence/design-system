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
      d="M9 5.5a3.5 3.5 0 0 1-2.5 3.355v6.023c0 1.01 1.328 1.384 1.854.521l5.585-8.34C15.517 4.473 19.5 5.59 19.5 8.623v6.523a3.502 3.502 0 0 1-1 6.855 3.5 3.5 0 0 1-1-6.855V8.622c0-1.01-1.328-1.384-1.854-.52l-5.585 8.338C8.483 19.028 4.5 17.91 4.5 14.878V8.855A3.502 3.502 0 0 1 5.5 2 3.5 3.5 0 0 1 9 5.5M5.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m13 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
      clipRule="evenodd"
    />
  </svg>
)

const SvgLinkConnectionIcon = ({
  className,
  size = 'sm',
  ...props
}: IconProps) => (
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

export default SvgLinkConnectionIcon
