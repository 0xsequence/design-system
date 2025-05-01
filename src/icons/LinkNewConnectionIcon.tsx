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
      d="M6.5 8.855A3.502 3.502 0 0 0 5.5 2a3.5 3.5 0 0 0-1 6.855v6.023c0 3.032 3.983 4.15 5.561 1.562l5.085-8.339c.526-.863 1.854-.49 1.854.52v2.761a1 1 0 1 0 2 0v-2.76c0-3.032-3.983-4.15-5.561-1.562l-5.085 8.339c-.526.863-1.854.49-1.854-.52zM7 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M19 15a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"
    />
  </svg>
)

const SvgLinkNewConnectionIcon = ({
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

export default SvgLinkNewConnectionIcon
