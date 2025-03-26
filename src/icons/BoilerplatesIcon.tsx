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
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M20 3a1 1 0 0 1 1 1v1a2 2 0 0 0-2-2zM4 3h1a2 2 0 0 0-2 2V4a1 1 0 0 1 1-1ZM3 20v-1a2 2 0 0 0 2 2H4a1 1 0 0 1-1-1Zm17 1h-1a2 2 0 0 0 2-2v1a1 1 0 0 1-1 1Z"
    />
    <path fill="currentColor" d="M11 3h2v12h-2z" />
    <path fill="currentColor" d="M13 8v2H4V8zM22 14v2H3v-2z" />
  </svg>
)

const SvgBoilerplatesIcon = ({
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

export default SvgBoilerplatesIcon
