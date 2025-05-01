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
      d="M21.707 2.293a1 1 0 0 1 0 1.414l-18 18a1 1 0 0 1-1.414-1.414l3.49-3.49C3.179 14.75 2 12 2 12s3-7 10-7c1.743 0 3.238.434 4.5 1.086l3.793-3.793a1 1 0 0 1 1.414 0m-8.414 7a3 3 0 0 0-4.001 4.001l-2.084 2.083a10.3 10.3 0 0 1-1.367-1.238 12.4 12.4 0 0 1-1.544-2.068L4.255 12l.042-.07c.337-.568.85-1.322 1.544-2.07C7.23 8.365 9.236 7 12 7c1.12 0 2.115.224 2.996.59z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M12 19c-.88 0-1.697-.11-2.453-.304l1.728-1.728Q11.629 17 12 17c2.764 0 4.77-1.364 6.16-2.86a12.4 12.4 0 0 0 1.543-2.07l.042-.07-.042-.07a12.4 12.4 0 0 0-1.437-1.953l1.416-1.416C21.267 10.291 22 12 22 12s-3 7-10 7"
    />
  </svg>
)

const SvgHiddenIcon = ({ className, size = 'sm', ...props }: IconProps) => (
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

export default SvgHiddenIcon
